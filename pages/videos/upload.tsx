import Boxes from "@/components/Videos/Upload/Boxes";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { gsap } from "gsap";
import Head from "next/head";

export default function Upload() {
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
      <Head>
        <title>Upload — Profit Saloon</title>
        <meta
          name="description"
          content="Change your life with Profit Saloon. Never miss on money, an idea or connection."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Profit Saloon — Revolutionary e-learning"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Change your life with Profit Saloon. Never miss on money, an idea or connection."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="900" />
        <meta
          property="og:image:alt"
          content="Profit Saloon — Revolutionary e-learning"
        />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#000000" />
      </Head>
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
        className="bg-black overflow-hidden w-full upload flex items-center justify-center"
      >
        <Boxes />
      </motion.div>
    </>
  );
}
