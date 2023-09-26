import Boxes from "@/components/SignIn/Boxes";
import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { gsap } from "gsap";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import Head from "next/head";

export default function SignIn() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const redirectURL = useMemo(() => {
    if (typeof router.query.redirect_url === "string") {
      return router.query.redirect_url;
    }
    return "/account";
  }, [router.query.redirect_url]);

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
      router.push(redirectURL);
    }
  }, [isSignedIn]);

  if (!isLoaded || isSignedIn) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Sign In — Profit Saloon</title>
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
        className="bg-black overflow-hidden w-screen h-screen flex items-center justify-center"
      >
        <Boxes></Boxes>
      </motion.div>
    </>
  );
}
