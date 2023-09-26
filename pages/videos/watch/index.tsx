import { useLayoutEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/utils/supabase-client";

export default function WatchIndex({ videoData }: { videoData: any }) {
  const router = useRouter();
  useLayoutEffect(() => {
    router.push(`/videos/watch/${videoData.id}`);
  }, []);
  return null;
}

export const getStaticProps = async () => {
  const { data, error } = await supabase
    .from("videos")
    .select("*, users(*)")
    .limit(1)
    .single();

  return { props: { videoData: data } };
};
