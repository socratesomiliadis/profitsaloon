import Boxes from "@/components/SignIn/Boxes";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/router";
import { sign } from "crypto";

export default function SignIn() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    gsap.to("header", {
      opacity: 0,
      duration: 0.4,
      pointerEvents: "none",
    });

    return () => {
      gsap.to("header", {
        opacity: 1,
        duration: 0.4,
        pointerEvents: "all",
      });
    };
  }, []);

  useEffect(() => {
    if (isSignedIn) {
      router.push("/account");
    }
  }, [isSignedIn]);

  if (!isLoaded || isSignedIn) {
    return null;
  }

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            ease: "easeOut",
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.2,
            ease: "easeOut",
          },
        }}
        className="bg-black overflow-hidden w-screen h-screen onboarding flex items-center justify-center"
      >
        <Boxes></Boxes>
      </motion.div>
    </>
  );
}
