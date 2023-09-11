import Player from "@/components/VideoPlayer/Player";
import VideoItem from "@/components/Videos/ui/VideoItem";

export default function VideosTest() {
  return (
    <>
      <main className="w-full h-[200vh] flex items-start pb-24 justify-start px-10">
        <div className="mt-16 grid grid-cols-3 gap-8">
          <VideoItem
            thumbnailURL="/static/images/testThumb.png"
            videoURL="/videos/watch/imanTest"
            title="This is how powerful Marketing really
            is (Episode 4)"
            channelName="Sebastian Ghiorghiu"
            viewcount="1,030,085"
            duration={103}
            profileImageURL="/static/images/testThumb.png"
          />
          <VideoItem
            thumbnailURL="/static/images/testThumb.png"
            videoURL="/videos/watch/imanTest"
            title="This is how powerful Marketing really
            is (Episode 4)"
            channelName="Sebastian Ghiorghiu"
            viewcount="1,030,085"
            duration={103}
            profileImageURL="/static/images/testThumb.png"
          />
          <VideoItem
            thumbnailURL="/static/images/testThumb.png"
            videoURL="/videos/watch/imanTest"
            title="This is how powerful Marketing really
            is (Episode 4)"
            channelName="Sebastian Ghiorghiu"
            viewcount="1,030,085"
            duration={103}
            profileImageURL="/static/images/testThumb.png"
          />
        </div>
      </main>
    </>
  );
}
