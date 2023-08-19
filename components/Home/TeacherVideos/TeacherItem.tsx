import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Flip from "gsap/dist/Flip";
gsap.registerPlugin(Flip);

export default function TeacherIntro({
  role,
  name,
  description,
  thumbnail,
  video,
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
      testRef.current?.classList.add("fixed");
      btnRef.current?.classList.add("off");
      videoRef.current!.currentTime = 0;
      videoRef.current!.muted = false;
      videoRef.current!.volume = 0.5;
      videoRef.current!.controls = true;
      videoRef.current?.play();
      videoRef.current?.classList.remove("pointer-events-none");
    } else {
      testRef.current?.classList.remove("fixed");
      btnRef.current?.classList.remove("off");
      videoRef.current!.currentTime = 0;
      videoRef.current!.muted = true;
      videoRef.current!.controls = false;
      videoRef.current?.pause();
      videoRef.current?.classList.add("pointer-events-none");
    }
    Flip.from(state, {
      duration: 0.5,
      absoluteOnLeave: false,
      absolute: false,
      scale: true,
      simple: true,
      ease: "power4.out",
    });
  }, [isPlaying]);

  return (
    <div className="teacher-intro-slide rounded-2xl basis-1/3 flex flex-col border-[#2b2b2b]/60 border-[0.5px] bg-gradient-to-r from-[#121212]/50 via-[#232323]/50 to-[#121212]/50">
      <div className="pt-2 px-2 teacher-intro-vid-wrapper">
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
              className="video-wrapper w-full max-w-[70vw] aspect-video h-auto relative cursor-pointer z-[1]"
            >
              <span className="absolute rounded-b-full w-full teacher-name left-0 pl-4 py-4 bg-gradient-to-t from-black to-transparent bottom-0 z-[3] flex flex-row items-center gap-1">
                <span className="text-white">{name} —</span>
                <span className="text-[#818181]">{role}</span>
              </span>
              <button
                ref={btnRef}
                className="video-button left-3 top-3 absolute flex flex-row items-center bg-[#B1B1B1]/25 py-[1px] rounded-full gap-2 z-[3]"
              >
                <span className="w-12 h-12 flex flex-row items-center justify-center bg-gradient-to-r from-[#121212] via-[#232323] to-[#121212] rounded-full">
                  <svg
                    width="15%"
                    viewBox="0 0 7 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-[1px]"
                  >
                    <path
                      d="M2.546 0.96174C1.45315 0.309071 0 1.02149 0 2.20994V6.64499C0 7.83344 1.45316 8.54586 2.546 7.89319L6.2591 5.67567C7.24697 5.08569 7.24697 3.76924 6.25909 3.17927L2.546 0.96174Z"
                      fill="white"
                    />
                  </svg>
                </span>
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
      <p className="pt-6 pb-7 px-6 teacher-intro-desc-wrapper leading-[1.3rem] text-white">
        &quot;{description}&quot;
      </p>
    </div>
  );
}
