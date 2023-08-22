import Boxes from "@/components/OnBoarding/Boxes";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function OnBoarding() {
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
        className="bg-black overflow-hidden w-screen h-screen onboarding flex items-center justify-center"
      >
        <Boxes></Boxes>
      </motion.div>
    </>
  );
}
