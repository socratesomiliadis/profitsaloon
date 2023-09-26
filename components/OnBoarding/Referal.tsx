import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Snippet } from "@nextui-org/react";
import { motion } from "framer-motion";
import { CircularProgress } from "@nextui-org/react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import QRCode from "react-qr-code";

export default function Referal({
  setActiveStep,
  stepIndex,
  setReferalsDone,
}: {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  stepIndex: number;
  setReferalsDone: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const redirectURL = useMemo(() => {
    if (typeof router.query.redirect_url === "string") {
      return router.query.redirect_url;
    }
    return "/account";
  }, [router.query.redirect_url]);
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-white text-4xl font-medium">
          Share and get a 50% off your first plan
        </h2>
        <p className="text-[#5c5c5c]">
          Copy your referral link and send it to friends.
        </p>
      </div>
      <div key="refs" className="mt-10 flex flex-col items-start gap-6">
        <div className="flex flex-row items-start gap-6">
          <div className="bg-black border-[#282828] border-[1px] rounded-xl p-2">
            <QRCode
              size={256}
              className="w-32 h-32"
              value={`https://profitsaloon.com/?ref=${user?.username}`}
              viewBox={`0 0 256 256`}
            />
          </div>
          <Snippet
            classNames={{
              base: [
                "bg-black font-normal w-[400px] text-white border-[#282828] border-[1px] rounded-xl",
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
            codeString={`https://profitsaloon.com/?ref=${user?.username}`}
          >
            Click to copy the referral link
          </Snippet>
        </div>
        <div className="flex flex-row items-center gap-4">
          <button
            type="submit"
            onClick={() => {
              router.push(redirectURL);
              setReferalsDone(true);
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
          <button
            onClick={() => {
              router.push(redirectURL);
              setReferalsDone(true);
            }}
            className="text-[#5C5C5C]"
          >
            Skip
          </button>
        </div>
      </div>
    </motion.div>
  );
}
