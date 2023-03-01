import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import HeroSection from '../components/Landing/HeroSection';
import TierSection from '../components/Landing/TierSection';
import { useUser } from '@/utils/useUser';
import { Price } from 'types';
import { useRouter } from 'next/router';
import { postData } from '@/utils/helpers';
import { getStripe } from '@/utils/stripe-client';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { getActiveProductsWithPrices } from '@/utils/supabase-client';
import { GetStaticPropsResult } from 'next';
import { Product } from 'types';
import FeaturedCourses from '@/components/Landing/FeaturedCourses';
import Tools from '@/components/Landing/Tools';
import TeacherSection from '@/components/Landing/TeacherSection';
import Footer from '@/components/Footer';
import { groq } from 'next-sanity';
import { sanityClient } from 'lib/sanityClient';
import { teacher } from 'lib/schemas/schemaTypes';
import { useEffect } from 'react';

interface Props {
  products: Product[];
  teachers: any[];
}

const teacherQuery = groq`*[_type == "teacher"] | order(orderRank)`;

export default function Home({ products, teachers }: Props) {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const { user, isLoading, subscription } = useUser();

  const handleCheckout = async () => {
    // setPriceIdLoading(price.id);
    if (!user) {
      return router.push('/signin');
    }
    if (subscription) {
      return router.push('/account');
    }

    try {
      const { sessionId } = await postData({
        url: '/api/create-checkout-session'
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
      // setPriceIdLoading(undefined);
    }
  };

  useEffect(() => {
    console.log(teachers);
  }, [teachers]);

  return (
    <>
      <Head>
        <title>Profit Saloon</title>
        <meta name="description" content="Created by SOHub" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <HeroSection />
        <TierSection />
        <FeaturedCourses />
        <Tools />
        <TeacherSection teachers={teachers} />
        <section className="bg-[#060606] h-[100vh]"></section>
        <Footer />
        <button onClick={() => handleCheckout()} className="text-white">
          Test
        </button>
      </main>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const products = await getActiveProductsWithPrices();
  const teachers = await sanityClient.fetch(teacherQuery);

  return {
    props: {
      products,
      teachers
    },
    revalidate: 60
  };
}
