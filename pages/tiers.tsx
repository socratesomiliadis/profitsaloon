import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import TiersHero from "@/components/Tiers/TiersHero";
import TiersNav from "@/components/Tiers/TiersNav";
import TiersFeatures from "@/components/Tiers/TiersFeatures";

export default function Tiers() {
  return (
    <>
      <Head>
        <title>Profit Saloon — Tiers</title>
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
      <main className="bg-black selection:bg-profitGreen selection:text-profitBlack">
        <TiersHero />
        {/* <TiersNav /> */}
        <TiersFeatures />
        <div className="h-[300vh]"></div>
        <Footer />
      </main>
    </>
  );
}
