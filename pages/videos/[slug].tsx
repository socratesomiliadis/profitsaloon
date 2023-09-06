import Player from "@/components/VideoPlayer/Player";
import { useRouter } from "next/router";

export default function VideoPage() {
  const router = useRouter();
  const videoName = router.query.slug as string;

  return (
    <div className="bg-black w-full h-screen px-12 pt-12">
      <Player
        url={`/static/videos/${videoName}.mp4`}
        blurURL={`/static/videos/${videoName}Blur.mp4`}
      />
    </div>
  );
}
