import Footer from "@/components/Footer/Footer";
import FeaturedCourses from "@/components/Home/FeaturedCourses";
import HeroMasked from "@/components/Home/HeroMasked";
import MainSection from "@/components/Home/HeroSection";
import Tools from "@/components/Home/ScrollingLogos";
import TeacherSection from "@/components/Home/TeacherVideos/TeacherSection";
import TierSection from "@/components/Home/TierSection";
import Image from "next/image";
import { getActiveProductsWithPrices } from "@/utils/supabase-client";
import { GetStaticPropsResult } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity/sanityClient";
import { Product } from "@/types";
import { teacher } from "@/lib/sanity/schemas/schemaTypes";
import Explainer from "@/components/Home/Explainer";
import { postData } from "@/utils/helpers";
import { getStripe } from "@/utils/stripe-client";
const teacherQuery = groq`*[_type == "teacher"] | order(orderRank)`;

interface Props {
  products: Product[];
  teachers: any[];
}

export default function Home({ products, teachers }: Props) {
  const handleCheckout = async () => {
    // setPriceIdLoading(price.id);

    try {
      const { sessionId } = await postData({
        url: "/api/create-checkout-session",
        data: {
          quantity: 8,
          metadata: {
            ai: true,
          },
        },
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
    <main className="bg-white selection:bg-profitGreen selection:text-profitBlack h-screen">
      <HeroMasked />
      <MainSection />
      <TierSection />
      <FeaturedCourses />
      <Tools />
      <TeacherSection teachers={teachers} />
      <Explainer />
      <div className="bg-black w-screen h-[20vh] flex items-center justify-center">
        <button onClick={handleCheckout} className="text-white">
          Test Checkout
        </button>
      </div>
      <Footer />
    </main>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const products = await getActiveProductsWithPrices();
  const teachers = await sanityClient.fetch(teacherQuery);

  return {
    props: {
      products,
      teachers,
    },
    revalidate: 60,
  };
}
