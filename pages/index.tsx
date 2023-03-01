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
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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

  // useEffect(() => {
  //   const path = document.querySelector('.test-path') as SVGPathElement;
  //   const length = path.getTotalLength();
  //   console.log(length);
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: 'main',
  //       start: 'top top',
  //       end: 'bottom bottom',
  //       scrub: 1
  //     }
  //   });
  //   tl.fromTo(
  //     '.test-path',
  //     {
  //       strokeDasharray: length + ' ' + length,
  //       strokeDashoffset: length
  //     },
  //     {
  //       strokeDashoffset: 0
  //     }
  //   );
  // }, []);

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
        {/* <div className="test fixed z-[9999] left-1/2 -translate-x-1/2 bottom-24 ">
          <svg
            width="120"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 89 45"
          >
            <defs>
              <linearGradient id="grad">
                <stop offset="0%" stop-color="#0d0d0d" />
                <stop offset="50%" stop-color="#1f1f1f" />
                <stop offset="100%" stop-color="#0d0d0d" />
              </linearGradient>
            </defs>

            <g id="b">
              <g id="c">
                <path
                  fill="url(#grad)"
                  d="M22.5,1h44c11.87,0,21.5,9.63,21.5,21.5h0c0,11.87-9.63,21.5-21.5,21.5H22.5C10.63,44,1,34.37,1,22.5h0C1,10.63,10.63,1,22.5,1Z"
                />
                <path
                  className="test-path"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.5"
                  d="M22.5,.5h44c12.15,0,22,9.85,22,22h0c0,12.15-9.85,22-22,22H22.5C10.35,44.5,.5,34.65,.5,22.5H.5C.5,10.35,10.35,.5,22.5,.5Z"
                />
              </g>
            </g>
          </svg>
        </div> */}
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
