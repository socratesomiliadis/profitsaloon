import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function VideoItem({
  thumbnailURL,
  profileImageURL,
  title,
  channelName,
  viewcount,
  duration,
  videoURL,
  videoAssetURL,
}: {
  thumbnailURL: string;
  profileImageURL: string;
  title: string;
  channelName: string;
  viewcount: string;
  duration: number;
  videoURL: string;
  videoAssetURL?: string;
}) {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuteHovered, setIsMuteHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    if (isHovered && videoRef) {
      const video = videoRef.current;
      video?.play();
    } else if (!isHovered && videoRef) {
      const video = videoRef.current as HTMLVideoElement;
      video?.pause();
      video.currentTime = 0;
    }
  }, [isHovered]);

  useEffect(() => {
    if (isHovered) {
      const video = videoRef.current as HTMLVideoElement;
      video.volume = 0.4;
      video.muted = isMuted;
    }
  }, [isHovered, isMuted]);

  return (
    <Link
      href={!isMuteHovered ? videoURL : "#"}
      // onClick={() => {
      //   if (!isMuteHovered) router.push(videoURL);
      // }}
      className="rounded-3xl cursor-pointer w-full p-5 border-[1px] border-[#202020] bg-gradient-to-r from-[#121212]/50 via-[#232323]/50 to-[#121212]/50 flex flex-col justify-between"
    >
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full aspect-video overflow-hidden h-auto"
      >
        {!isHovered && (
          <Image
            src={thumbnailURL}
            width={1280}
            height={720}
            alt=""
            className="absolute aspect-video inset-0 z-[2] w-full h-full object-cover rounded-xl"
          />
        )}
        <button
          onClick={(e) => {
            toggleMute();
          }}
          onMouseOver={() => setIsMuteHovered(true)}
          onMouseLeave={() => setIsMuteHovered(false)}
          className="w-4 block z-[1] absolute text-white right-4 bottom-4"
        >
          {isMuted ? (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 181 148"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M73.4072 3.89976C84.3738 -5.15792 101.023 2.57119 101.023 16.7197V131.28C101.023 145.429 84.3737 153.158 73.4072 144.1L41.3866 117.653C39.8737 116.404 37.9666 115.719 35.9971 115.719H25.2558C11.3074 115.719 0 104.512 0 90.6877V57.3123C0 43.4877 11.3074 32.2806 25.2558 32.2806H35.9971C37.9666 32.2806 39.8737 31.5963 41.3866 30.3467L73.4072 3.89976Z"
                fill="currentColor"
              />
              <path
                d="M178.534 63.2123C181.822 59.9538 181.822 54.6708 178.534 51.4123C175.247 48.1538 169.916 48.1538 166.629 51.4123L154.723 63.2123L142.817 51.4123C139.529 48.1538 134.199 48.1538 130.911 51.4123C127.624 54.6708 127.624 59.9538 130.911 63.2123L142.817 75.0123L130.911 86.8123C127.624 90.0708 127.624 95.3539 130.911 98.6124C134.199 101.871 139.529 101.871 142.817 98.6124L154.723 86.8123L166.629 98.6124C169.916 101.871 175.247 101.871 178.534 98.6124C181.822 95.3539 181.822 90.0708 178.534 86.8123L166.629 75.0123L178.534 63.2123Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg
              width="100%"
              viewBox="0 0 220 178"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M120 20.1088C120 3.09238 100.223 -6.20344 87.1964 4.69025L49.1609 36.4981C47.3637 38.001 45.0984 38.824 42.759 38.824H30C13.4315 38.824 0 52.3027 0 68.9296V109.07C0 125.697 13.4315 139.176 30 139.176H42.759C45.0984 139.176 47.3637 139.999 49.1609 141.502L87.1964 173.31C100.223 184.203 120 174.908 120 157.891V20.1088Z"
                fill="currentColor"
              />
              <path
                d="M187.782 10.9532C183.876 7.0342 177.545 7.0342 173.64 10.9532C169.734 14.8722 169.734 21.2261 173.64 25.1451C189.937 41.5002 200 64.0657 200 89.0087C200 113.952 189.937 136.517 173.64 152.872C169.734 156.791 169.734 163.145 173.64 167.064C177.545 170.983 183.876 170.983 187.782 167.064C207.677 147.099 220 119.489 220 89.0087C220 58.5289 207.677 30.9184 187.782 10.9532Z"
                fill="currentColor"
              />
              <path
                d="M155.963 42.8816C152.058 38.9626 145.726 38.9626 141.821 42.8816C137.915 46.8006 137.915 53.1545 141.821 57.0735C149.975 65.2566 155.001 76.5324 155.001 89.0053C155.001 101.478 149.975 112.754 141.821 120.937C137.915 124.856 137.915 131.21 141.821 135.129C145.726 139.048 152.058 139.048 155.963 135.129C167.715 123.336 175.001 107.015 175.001 89.0053C175.001 70.9957 167.715 54.6747 155.963 42.8816Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
        <video
          ref={videoRef}
          poster={thumbnailURL}
          width={1280}
          muted
          playsInline
          height={720}
          src={videoAssetURL}
          className="w-full h-full z-[0] object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-row items-start mt-4 gap-3 w-[80%]">
        <Image
          src={profileImageURL}
          width={100}
          height={100}
          alt=""
          className="w-11 h-11 object-cover rounded-full"
        />
        <h3 className="text-white text-xl">{title}</h3>
      </div>
      <div className="flex flex-row items-center justify-between w-full mt-6">
        <div
          className="text-[#818181] text-sm"
          //   href={`/videos/channels/${channelName}`}
        >
          {channelName}
        </div>
        <div className="text-[#818181] flex flex-row items-center gap-1">
          <span>{viewcount} views</span>
        </div>
      </div>
    </Link>
  );
}
