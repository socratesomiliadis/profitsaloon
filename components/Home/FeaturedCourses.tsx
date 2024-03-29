import Image from "next/image";
import IconsHover from "./IconsHover";
import { motion } from "framer-motion";
export default function FeaturedCourses() {
  return (
    <section className="featured-courses relative w-screen min-h-screen bg-[#000]">
      <div className="left-0 w-full h-[30vh] absolute z-0 top-0 -translate-y-[99%] bg-gradient-to-t from-[#000] to-transparent"></div>
      <div className="flex flex-col items-center gap-4 z-50 relative">
        <div className="flex flex-col items-center gap-2 z-10">
          <span className="text-transparent text-xl font-medium bg-clip-text bg-gradient-to-t from-[#00FF0A] to-[#E9FF54]">
            Stop chasing the meta. Be the meta.
          </span>
          <h3 className="text-center text-5xl font-medium text-[#ededed]">
            Join a supportive community to
            <br /> enhance your growth.
          </h3>
        </div>
      </div>
      <div className="mt-12 w-full flex flex-col items-center z-[4] relative">
        <div className="flex flex-row items-center justify-center w-full gap-6">
          {/* <ArrowBtn width={26} height={26} className="scale-x-[-1]" /> */}
          <div className="border-[1px] z-10 border-[#202020] w-[60%] h-[80px] rounded-full bg-gradient-to-r from-[#121212]/50 via-[#232323]/50 to-[#121212]/50 flex items-center justify-center">
            <IconsHover />
          </div>
          {/* <ArrowBtn width={26} height={26} /> */}
        </div>
        <div className="light-bar w-[35%] h-[10px]"></div>
        <div
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 10%, transparent 90%)",
          }}
          className="relative flex w-full h-[40vh] items-center justify-center isolate z-0"
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-[18%] h-fit flex flex-col items-center gap-4 z-50 text-transparent bg-clip-text bg-gradient-to-b from-black to-black/70">
            <span className="text-center text-4xl font-medium py-1">
              Copywriting
            </span>
            {/* <p className="text-center text-lg font-medium">
              The process of writing text for the <br />
              purpose of advertising or other forms of marketing.
            </p> */}
          </div>
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to left bottom, black 10%, transparent 80%)",
            }}
            className="absolute top-0 right-1/2 h-full w-[35%] bg-gradient-conic from-white via-[#000] to-transparent text-white [--conic-position:from_45deg_at_center_top]"
          ></div>
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to right bottom, black 10%, transparent 80%)",
            }}
            className="absolute top-0 left-1/2 h-full w-[35%] bg-gradient-conic from-transparent via-[#000] to-white text-white [--conic-position:from_315deg_at_center_top]"
          ></div>
          {/* <div className="absolute top-1/2 h-[30vh] w-full translate-y-[20%] scale-x-150 bg-[#000] blur-2xl"></div>
          <div className="absolute top-1/2 z-50 h-[30vh] w-full bg-[#000] opacity-[0.01] backdrop-blur-md"></div> */}
          {/* <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-white opacity-50 blur-3xl"></div> */}
          <div className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-white blur-2xl"></div>

          {/* <div className="absolute bottom-0 z-40 h-[10vh] w-full -translate-y-[0] bg-[#000]"></div> */}
        </div>
      </div>
    </section>
  );
}
