import Footer from "@/components/Footer/Footer";
import FeaturedCourses from "@/components/Home/FeaturedCourses";
import HeroMasked from "@/components/Home/HeroMasked";
import MainSection from "@/components/Home/HeroSection";
import Tools from "@/components/Home/ScrollingLogos";
import TierSection from "@/components/Home/TierSection";
import Head from "next/head";
import MockupSection from "@/components/Home/MockupSection";
import { useLayoutEffect } from "react";
import { useHeaderTheme } from "@/hooks/useHeaderTheme";

export default function Home() {
  const { setHeaderTheme } = useHeaderTheme();
  useLayoutEffect(() => {
    setHeaderTheme("light");
  }, []);

  return (
    <>
      <Head>
        <title>Profit Saloon — Revolutionary e-learning</title>
        <meta
          name="description"
          content="Change your life with Profit Saloon. Never miss on money, an idea or connection."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Profit Saloon — Revolutionary e-learning"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Change your life with Profit Saloon. Never miss on money, an idea or connection."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="900" />
        <meta
          property="og:image:alt"
          content="Profit Saloon — Revolutionary e-learning"
        />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <main className="bg-white selection:bg-profitGreen selection:text-profitBlack">
        <HeroMasked />
        <MainSection />
        <TierSection />
        {/* <FeaturedCourses /> */}
        <Tools />
        <MockupSection />
        <Footer />
      </main>
    </>
  );
}
