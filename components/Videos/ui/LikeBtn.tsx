import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { supabaseClientWithAuth } from "@/utils/helpers";

export default function LikeBtn({ videoId }: { videoId: string }) {
  const { userId, getToken } = useAuth();
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (videoId && userId) checkIfLiked();
  }, [videoId, userId]);

  async function checkIfLiked() {
    const supabaseAccessToken = await getToken({ template: "supabase" });
    const supabase = await supabaseClientWithAuth(
      supabaseAccessToken as string
    );
    const { data, error } = await supabase
      .from("likes_video")
      .select("*")
      .eq("user_id", userId)
      .eq("video_id", videoId);
    if (error) {
      console.log(error);
    }
    if (data) {
      if (data.length > 0) setHasLiked(true);
      else setHasLiked(false);
      setIsLoaded(true);
    }
  }

  async function removeLike() {
    const supabaseAccessToken = await getToken({ template: "supabase" });
    const supabase = await supabaseClientWithAuth(
      supabaseAccessToken as string
    );
    const { data, error } = await supabase
      .from("likes_video")
      .delete()
      .eq("user_id", userId)
      .eq("video_id", videoId);
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      // setIsFollowing(false);
    }
  }

  async function like() {
    const supabaseAccessToken = await getToken({ template: "supabase" });
    const supabase = await supabaseClientWithAuth(
      supabaseAccessToken as string
    );
    const { data, error } = await supabase.from("likes_video").insert([
      {
        user_id: userId,
        video_id: videoId,
      },
    ]);
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      // setIsFollowing(true);
      console.log(hasLiked);
    }
  }

  return (
    <div className="flex flex-col items-center gap-2 justify-self-end">
      <button
        onClick={async () => {
          if (!hasLiked) {
            setHasLiked(true);
            await like();
          }
          if (hasLiked) {
            setHasLiked(false);
            await removeLike();
          }
          await checkIfLiked();
        }}
        className={`like-btn ${
          hasLiked
            ? "liked bg-gradient-to-b from-[#E9FF54] to-[#00FF0A] font-medium text-black"
            : "bg-[#1D1D1D] text-white"
        } py-3 px-12 rounded-xl`}
      >
        <span className="flex items-center justify-center">
          {!isLoaded && (
            <div className="relative flex items-center">
              <span aria-hidden className="opacity-0 pointer-events-none">
                Liked
              </span>
            </div>
          )}
          {isLoaded ? (hasLiked ? "Liked" : "Like") : ""}
        </span>
      </button>
    </div>
  );
}
