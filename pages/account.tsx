import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import AccountMain from "@/components/Account/Pages/account";
import { sanityClient } from "@/lib/sanity/sanityClient";
import { groq } from "next-sanity";
import AccLayout from "@/components/Account/AccLayout";
import AccVideos from "@/components/Account/Pages/videos";
import AccSettings from "@/components/Account/Pages/settings";

const coursesQuery = groq`*[_type == 'course'] | order(orderRank)`;

export default function Account({ allCourses }: { allCourses: any }) {
  const router = useRouter();
  const { tab } = router.query;

  return (
    <>
      <Head>
        <title>Account — Profit Saloon</title>
        <meta
          name="description"
          content="Change your life with Profit Saloon. Never miss on money, an idea or connection."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Account — Profit Saloon" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Change your life with Profit Saloon. Never miss on money, an idea or connection."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:alt" content="Account — Profit Saloon" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <AccLayout courses={allCourses}>
        <AnimatePresence mode="popLayout">
          {!tab && <AccountMain key="accMain" />}
          {tab === "videos" && <AccVideos key="accVids" />}
          {tab === "settings" && <AccSettings key="accSettings" />}
        </AnimatePresence>
      </AccLayout>
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
