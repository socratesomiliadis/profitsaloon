import Player from "@/components/VideoPlayer/Player";
import CategorySelector from "@/components/Videos/ui/CategorySelector";
import VideoItem from "@/components/Videos/ui/VideoItem";
import { transformCategory } from "@/lib/utils";
import { supabase } from "@/utils/supabase-client";
import Head from "next/head";
import { useEffect } from "react";

export default function VideosTest({
  homeVids,
  categories,
  selectedCategory,
}: {
  homeVids: any;
  categories: any;
  selectedCategory: string;
}) {
  useEffect(() => {
    console.log(homeVids);
  }, [homeVids]);

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

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
        {homeVids.length <= 0 && (
          <span className="text-[#818181] text-lg absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            No videos in this category.
          </span>
        )}
        <div className="mt-8 grid grid-cols-3 gap-8">
          {homeVids?.map((vid: any) => (
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

export async function getServerSideProps({ query }: { query: any }) {
  const category = transformCategory(query?.category?.toString() ?? "all");
  const homeVids =
    category === "all"
      ? await supabase.from("videos").select("*, users(*)").limit(3)
      : await supabase
          .from("videos")
          .select("*, users(*)")
          .containedBy("categories", [category])
          .limit(3);
  const categories = await supabase.from("video_categories").select("*");

  return {
    props: {
      homeVids: homeVids.data,
      categories: categories.data,
      selectedCategory: category,
    },
  };
}
