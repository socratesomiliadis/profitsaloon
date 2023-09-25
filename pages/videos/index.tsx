import Player from "@/components/VideoPlayer/Player";
import CategorySelector from "@/components/Videos/ui/CategorySelector";
import VideoItem from "@/components/Videos/ui/VideoItem";
import { supabase } from "@/utils/supabase-client";
import Head from "next/head";
import { useEffect } from "react";

export default function VideosTest({
  homeVids,
  categories,
}: {
  homeVids: any;
  categories: any;
}) {
  useEffect(() => {
    console.log(homeVids);
  }, [homeVids]);

  return (
    <>
      <Head>
        <title>Profit Saloon — Videos</title>
        <meta
          name="description"
          content="Change your life with Profit Saloon. Never miss on money, an idea or connection."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Profit Saloon — Videos" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Change your life with Profit Saloon. Never miss on money, an idea or connection."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:alt" content="Profit Saloon — Videos" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <main className="w-full h-[200vh] flex flex-col items-start pb-24 justify-start px-10">
        <CategorySelector categories={categories} />
        <div className="bg-[#1D1D1D] mt-24 text-white py-4 px-10 rounded-lg">
          Recommended
        </div>

        <div className="mt-8 grid grid-cols-3 gap-8">
          {homeVids.map((vid: any) => (
            <VideoItem
              key={vid?.id}
              videoAssetURL={vid?.video_url}
              thumbnailURL={vid?.thumbnail_url}
              videoURL={`/videos/watch/${vid?.id}`}
              title={vid?.title}
              channelName={vid?.users?.name}
              viewcount="1,030,085"
              duration={103}
              profileImageURL={vid?.users?.avatar_url}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const homeVids = await supabase.from("videos").select("*, users(*)").limit(3);
  const categories = await supabase.from("video_categories").select("*");

  return {
    props: {
      homeVids: homeVids.data,
      categories: categories.data,
    },
    revalidate: 1,
  };
}
