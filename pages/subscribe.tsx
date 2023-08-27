import Footer from "@/components/Footer/Footer";
import SubHeader from "@/components/Subscribe/SubHeader";
import SubPage from "@/components/Subscribe/SubPageLegacy";
import { TierInfoType } from "@/lib/types";
import Head from "next/head";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity/sanityClient";
import { useEffect, useState } from "react";

const coursesQuery = groq`*[_type == 'course'] | order(orderRank)`;

const tiersInfo: TierInfoType[] = [
  {
    name: "Student",
    features: [
      "7-day money back guarantee",
      "1 free category to choose",
      "8 ways to make money",
    ],
    calcPrice: (quantity: number) => {
      if (quantity <= 0) return 0;
      if (quantity <= 2) return quantity * 28.99;
      if (quantity > 2) return 2 * 28.99 + (quantity - 2) * 14;
      return 0;
    },
  },
  {
    name: "Scholar",
    features: [
      "7-day money back guarantee",
      "1 free category to choose",
      "8 ways to make money",
    ],
    calcPrice: (quantity: number) => {
      if (quantity <= 0) return 0;
      if (quantity <= 2) return quantity * 28.99;
      if (quantity > 2) return 2 * 28.99 + (quantity - 2) * 14;
      return 0;
    },
  },
  {
    name: "Expert",
    features: [
      "7-day money back guarantee",
      "1 free category to choose",
      "8 ways to make money",
    ],
    calcPrice: (quantity: number) => {
      if (quantity <= 0) return 0;
      if (quantity <= 2) return quantity * 28.99;
      if (quantity > 2) return 2 * 28.99 + (quantity - 2) * 14;
      return 0;
    },
  },
];

export default function Subscribe({ allCourses }: { allCourses: any[] }) {
  const router = useRouter();
  const tierQuery = router.query.tier?.toString() ?? "1";
  const currentTier = parseInt(tierQuery);

  return (
    <>
      <Head>
        <title>Subscribe — Profit Saloon</title>
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
      <main className="flex flex-col h-screen overflow-hidden">
        <SubHeader />
        <SubPage
          tier={currentTier}
          tierInfo={tiersInfo}
          allCourses={allCourses}
        />
      </main>
    </>
  );
}

export async function getStaticProps({ params }: { params: any }) {
  const allCourses = await sanityClient.fetch(coursesQuery);

  return {
    props: {
      allCourses,
    },
    revalidate: 1,
  };
}
