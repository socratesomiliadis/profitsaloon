import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Flip from 'gsap/dist/Flip';
gsap.registerPlugin(Flip);

export default function TeacherIntro({
  role,
  name,
  description,
  thumbnail,
  video
}: {
  role: string;
  name: string;
  description: string;
  thumbnail: string;
  video: string;
}) {
  const testRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let state = Flip.getState(testRef.current);
    if (isPlaying) {
      testRef.current?.classList.add('fixed');
      btnRef.current?.classList.add('off');
      videoRef.current!.currentTime = 0;
      videoRef.current!.muted = false;
      videoRef.current!.volume = 0.5;
      videoRef.current!.controls = true;
      videoRef.current?.play();
      videoRef.current?.classList.remove('pointer-events-none');
    } else {
      testRef.current?.classList.remove('fixed');
      btnRef.current?.classList.remove('off');
      videoRef.current!.currentTime = 0;
      videoRef.current!.muted = true;
      videoRef.current!.controls = false;
      videoRef.current?.pause();
      videoRef.current?.classList.add('pointer-events-none');
    }
    Flip.from(state, {
      duration: 0.5,
      scale: true,
      ease: 'power4.out'
    });
  }, [isPlaying]);

  return (
    <div className="teacher-intro-slide rounded-2xl basis-1/3 flex flex-col border-[#2A2A2A]/60 border-[1px] bg-gradient-to-r from-[#101010] via-[#1b1b1b] to-[#101010]">
      <div className="pt-8 px-10 teacher-intro-vid-wrapper">
        <div className="relative w-full aspect-video h-auto overflow-hidden">
          <div
            onClick={() => {
              if (!isPlaying) {
                setIsPlaying(true);
              }
            }}
            ref={testRef}
            className="video-outer w-full min-w-full inset-0 flex flex-row items-center justify-center"
          >
            <div
              // onMouseEnter={() => {
              //   if (!isPlaying) videoRef.current?.play();
              // }}
              // onMouseLeave={() => {
              //   if (!isPlaying) videoRef.current?.pause();
              // }}
              // onClick={() => {
              //   setIsPlaying(true);
              // }}
              className="video-wrapper w-full max-w-[60vw] aspect-video h-auto relative cursor-pointer z-[1]"
            >
              <button
                ref={btnRef}
                className="video-button left-6 bottom-6 absolute flex flex-row items-center gap-2 z-[3]"
              >
                <span className="w-12 h-12 flex flex-row items-center justify-center bg-[#C1C1C1] rounded-full">
                  <svg
                    width="12"
                    viewBox="0 0 9 13"
                    fill="none"
                    className="-mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99985 6.22241C8.99985 6.5868 8.84658 6.91294 8.58988 7.09478L1.22678 12.3087C1.09882 12.3993 0.958664 12.4446 0.818417 12.4446C0.677699 12.4446 0.536972 12.3991 0.40883 12.3079C0.152791 12.1257 0 11.8001 0 11.4364V1.00814C0 0.644439 0.1528 0.31878 0.408733 0.136823C0.664773 -0.0453733 0.97055 -0.0454901 1.22669 0.13577L8.59002 5.34973C8.84672 5.53157 9 5.8577 9 6.22209L8.99985 6.22241Z"
                      fill="#171717"
                    />
                  </svg>
                </span>
                <span className="text-[#E6E6E6] -mb-1">Watch video</span>
              </button>
              <Image
                src={thumbnail}
                width="1280"
                height="720"
                alt={`Profit Saloon introducing ${name}`}
                className="video-thumbnail aspect-video w-full h-auto object-cover rounded-xl pointer-events-none absolute inset-0 z-[2]"
              />
              <video
                ref={videoRef}
                width="1920"
                muted
                disablePictureInPicture
                controlsList="nodownload noremoteplayback noplaybackrate"
                height="1080"
                src={video}
                className="aspect-video relative w-full h-auto object-cover rounded-xl cursor-pointer pointer-events-none z-[1]"
              />

              {/* <Image
                src={thumbnail}
                alt={`Profit Saloon introducing ${name}`}
                width={1280}
                height={720}
                quality={100}
                className="aspect-video w-full h-auto object-cover rounded-xl"
              /> */}
            </div>
            <div
              onClick={() => {
                if (isPlaying) {
                  setIsPlaying(false);
                }
              }}
              className="bg-overlay cursor-pointer w-full h-full z-[0] absolute inset-0"
            ></div>
          </div>
        </div>
      </div>
      <p className="pt-6 pb-16 px-10 teacher-intro-desc-wrapper text-white w-[90%]">
        {description}
      </p>
      <span className="w-full h-[1px] bg-[#2A2A2A] opacity-60"></span>
      <span className="py-3 px-10 flex flex-row items-center gap-1">
        <span className="text-white">{role} —</span>
        <span className="text-[#818181]">{name}</span>
      </span>
    </div>
  );
}
