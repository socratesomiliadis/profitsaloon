import { useRouter } from "next/router";
import { useState } from "react";
import { Snippet } from "@nextui-org/react";
import { motion } from "framer-motion";
import { CircularProgress } from "@nextui-org/react";
import { useUser } from "@clerk/clerk-react";
import Image from "next/image";

export default function ShareVideo({
  setActiveStep,
  stepIndex,
  setShareDone,
  videoID,
}: {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  stepIndex: number;
  setShareDone: React.Dispatch<React.SetStateAction<boolean>>;
  videoID: string;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      className="w-full h-full relative flex items-center justify-center"
    >
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-col gap-1">
          <span className="text-[#00FF0A]">Share your video</span>
          <h2 className="text-white text-4xl font-medium">
            Click to copy your URL
          </h2>
        </div>
        <div key="refs" className="mt-10 flex flex-col items-start gap-6">
          <div className="flex flex-row items-start gap-6">
            <div className="bg-gradient-to-r border-[#282828] border-[1px] rounded-xl from-[#121212]/50 via-[#232323]/50 to-[#121212]/50 p-2">
              <Image
                src="/static/images/qr.png"
                width={200}
                height={200}
                alt=""
                className="w-32"
              />
            </div>
            <Snippet
              classNames={{
                base: [
                  "bg-transparent bg-gradient-to-r font-normal w-[400px] text-white/40 border-[#282828] border-[1px] rounded-xl from-[#121212]/50 via-[#232323]/50 to-[#121212]/50",
                ],
                pre: "font-[inherit]",
              }}
              tooltipProps={{
                delay: 0,
                closeDelay: 0,
                classNames: {
                  base: "text-white",
                },
              }}
              hideSymbol
              codeString={`https://profitsaloon.vercel.app/videos/watch/${videoID}`}
            >
              Click to copy the video URL
            </Snippet>
          </div>
          <div className="flex flex-row items-center gap-4">
            <button
              onClick={() => {
                router.push("/videos");
                setShareDone(true);
              }}
              className="px-6 py-2 rounded-full bg-white text-black text-sm flex flex-row items-center gap-3"
            >
              {loading && (
                <CircularProgress
                  size="sm"
                  color="default"
                  aria-label="Loading..."
                  classNames={{
                    svg: "w-4 h-4",
                  }}
                />
              )}
              <span>Continue</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
