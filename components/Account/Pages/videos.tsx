import { useState, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { supabaseClientWithAuth } from "@/utils/helpers";
import { CircularProgress, ScrollShadow } from "@nextui-org/react";
import VideoEditItem from "../VideoEditItem";
import { motion } from "framer-motion";

export default function AccVideos() {
  const [ownVids, setOwnVids] = useState([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { isLoaded: isLoadedClerk, userId, getToken } = useAuth();

  async function getOwnVids() {
    const supabaseAccessToken = await getToken({ template: "supabase" });
    const supabase = await supabaseClientWithAuth(
      supabaseAccessToken as string
    );
    const { data, error } = await supabase
      .from("videos")
      .select("*, users(*)")
      .eq("user_id", userId);

    if (error) {
      console.log(error);
    }
    if (data) {
      //@ts-expect-error
      if (data.length > 0) setOwnVids(data);
      else setOwnVids([]);
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    if (isLoadedClerk) {
      getOwnVids().catch((err) => console.log(err));
    }
  }, [isLoadedClerk]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      className="w-full h-full flex flex-col items-start py-12 gap-4 px-12 absolute"
    >
      <h2 className="text-4xl text-white font-medium">Your Videos</h2>
      <ScrollShadow className="mt-10 w-full h-full flex flex-col gap-6">
        {!isLoaded && (
          <CircularProgress
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
            color="primary"
          />
        )}
        {isLoaded &&
          ownVids.length > 0 &&
          ownVids.map((vid: any, index: number) => {
            return (
              <VideoEditItem key={index} video={vid} refetch={getOwnVids} />
            );
          })}
      </ScrollShadow>
    </motion.div>
  );
}
