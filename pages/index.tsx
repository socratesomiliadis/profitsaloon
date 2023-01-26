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

interface Props {
  products: Product[];
}

const Home: NextPage = () => {
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
        {/* <button onClick={() => handleCheckout()} className="text-white">
          Test
        </button> */}
      </main>
    </>
  );
};

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const products = await getActiveProductsWithPrices();

  return {
    props: {
      products
    },
    revalidate: 60
  };
}

export default Home;
