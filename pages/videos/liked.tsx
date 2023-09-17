import VideoItem from "@/components/Videos/ui/VideoItem";
import { supabase } from "@/utils/supabase-client";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { GetServerSideProps } from "next";
import { supabaseClientWithAuth } from "@/utils/helpers";

export default function Liked() {
  const [likedVids, setLikedVids] = useState([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { isLoaded: isLoadedClerk, userId, getToken } = useAuth();

  async function getLiked() {
    const supabaseAccessToken = await getToken({ template: "supabase" });
    const supabase = await supabaseClientWithAuth(
      supabaseAccessToken as string
    );
    const { data, error } = await supabase
      .from("likes_video")
      .select("videos(*, users(*))")
      .eq("user_id", userId);

    if (error) {
      console.log(error);
    }
    if (data) {
      //@ts-expect-error
      if (data.length > 0) setLikedVids(data);
      else setLikedVids([]);
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    if (isLoadedClerk) {
      getLiked().catch((err) => console.log(err));
    }
  }, [isLoadedClerk]);

  return (
    <>
      <main className="w-full h-screen flex flex-col items-start pb-24 justify-start px-10">
        <div className="mt-3 flex flex-row items-center gap-4">
          <span className="block w-2">
            <svg
              width="100%"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.94334 0.77053C4.57873 0.443678 3.98759 0.443678 3.62298 0.77053L0.878696 3.23063C-0.0328236 4.04776 -0.0328264 5.37259 0.878695 6.18972L3.62298 8.64982C3.98759 8.97667 4.57873 8.97667 4.94334 8.64982C5.30795 8.32297 5.30795 7.79304 4.94334 7.46619L2.19906 5.00608C2.01676 4.84266 2.01676 4.57769 2.19906 4.41427L4.94334 1.95417C5.30795 1.62731 5.30795 1.09738 4.94334 0.77053Z"
                fill="#818181"
              />
            </svg>
          </span>
          <button className="bg-gradient-to-b from-[#E9FF54] to-[#00FF0A] font-medium text-black py-[0.3rem] px-10 rounded-xl">
            All
          </button>
          <button className="bg-[#1D1D1D] text-white py-[0.3rem] px-10 rounded-lg">
            Crypto
          </button>
          <button className="bg-[#1D1D1D] text-white py-[0.3rem] px-10 rounded-lg">
            E-commerce
          </button>
          <button className="bg-[#1D1D1D] text-white py-[0.3rem] px-10 rounded-lg">
            Artificial Intelligence
          </button>
          <button className="bg-[#1D1D1D] text-white py-[0.3rem] px-10 rounded-lg">
            Copywriting
          </button>
        </div>
        <div className="bg-[#1D1D1D] mt-24 text-white py-4 px-10 rounded-lg">
          Recommended
        </div>

        <div className="mt-8 grid grid-cols-3 gap-8">
          {likedVids?.map((data: any) => {
            const vid = data?.videos;
            return (
              <VideoItem
                key={vid?.id}
                thumbnailURL={vid?.thumbnail_url}
                videoURL={`/videos/watch/${vid?.id}`}
                title={vid?.title}
                channelName={vid?.users?.name}
                viewcount="1,030,085"
                duration={103}
                profileImageURL={vid?.users?.avatar_url}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { userId } = getAuth(ctx.req);

//   if (!userId) {
//     return {
//       props: {
//         likedVids: null,
//       },
//       revalidate: 1,
//     };
//   }

//   const likedVids = await supabase
//     .from("likes_video")
//     .select("videos(*, users(*))")
//     .eq("user_id", "user_2VLH0n9tcpgeqNQsjshhUHOn6im");

//   return {
//     props: {
//       likedVids: likedVids.data,
//     },
//   };
// };
