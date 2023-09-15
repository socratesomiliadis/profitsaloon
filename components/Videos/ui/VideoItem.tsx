import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <Link
      href={videoURL}
      className="rounded-3xl w-full p-5 border-[1px] border-[#202020] bg-gradient-to-r from-[#121212]/50 via-[#232323]/50 to-[#121212]/50 flex flex-col justify-between"
    >
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full aspect-[16/8.5] h-auto"
      >
        {!isHovered && (
          <Image
            src={thumbnailURL}
            width={1280}
            height={720}
            alt=""
            className="absolute inset-0 z-[1] w-full h-full object-cover rounded-xl"
          />
        )}
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
      <div className="flex flex-row items-center mt-4 gap-3 w-[80%]">
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
          <span className="w-4 block">
            <svg
              width="100%"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.929688 8.53505L0.591819 8.51123L0.566264 8.87376H0.929688V8.53505ZM6.73609 8.53505V8.87376H7.09952L7.07396 8.51123L6.73609 8.53505ZM10.8651 8.53505V8.87376H11.2285L11.203 8.51123L10.8651 8.53505ZM4.99417 2.55123C4.99417 3.17477 4.48869 3.68025 3.86515 3.68025V4.35766C4.86282 4.35766 5.67159 3.54889 5.67159 2.55123H4.99417ZM3.86515 3.68025C3.24161 3.68025 2.73612 3.17477 2.73612 2.55123H2.05871C2.05871 3.54889 2.86748 4.35766 3.86515 4.35766V3.68025ZM2.73612 2.55123C2.73612 1.92768 3.24161 1.4222 3.86515 1.4222V0.744789C2.86748 0.744789 2.05871 1.55356 2.05871 2.55123H2.73612ZM3.86515 1.4222C4.48869 1.4222 4.99417 1.92768 4.99417 2.55123H5.67159C5.67159 1.55356 4.86282 0.744789 3.86515 0.744789V1.4222ZM9.05866 2.55123C9.05866 3.17477 8.55317 3.68025 7.92963 3.68025V4.35766C8.9273 4.35766 9.73607 3.54889 9.73607 2.55123H9.05866ZM7.92963 3.68025C7.30609 3.68025 6.80061 3.17477 6.80061 2.55123H6.1232C6.1232 3.54889 6.93196 4.35766 7.92963 4.35766V3.68025ZM6.80061 2.55123C6.80061 1.92768 7.30609 1.4222 7.92963 1.4222V0.744789C6.93196 0.744789 6.1232 1.55356 6.1232 2.55123H6.80061ZM7.92963 1.4222C8.55317 1.4222 9.05866 1.92768 9.05866 2.55123H9.73607C9.73607 1.55356 8.9273 0.744789 7.92963 0.744789V1.4222ZM0.929688 8.87376H6.73609V8.19634H0.929688V8.87376ZM1.26756 8.55887C1.41703 6.4384 2.67601 5.48669 3.83289 5.48669C4.98977 5.48669 6.24875 6.4384 6.39823 8.55887L7.07396 8.51123C6.90509 6.11561 5.42004 4.80927 3.83289 4.80927C2.24574 4.80927 0.760689 6.11561 0.591819 8.51123L1.26756 8.55887ZM6.84575 5.79287C7.56115 5.37455 8.4216 5.38471 9.13033 5.82436C9.83608 6.26216 10.4281 7.15226 10.5272 8.55887L11.203 8.51123C11.0916 6.93134 10.4123 5.82243 9.48743 5.24871C8.56554 4.67683 7.43609 4.66296 6.50381 5.20809L6.84575 5.79287ZM7.7038 8.87376H10.8651V8.19634H7.7038V8.87376Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span>{viewcount} views</span>
        </div>
      </div>
    </Link>
  );
}
