import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Navigation/Header";
import Link from "next/link";

export default function SubscribeSuccess() {
  return (
    <>
      <Head>
        <title>Subscribed Succesfully — Profit Saloon</title>
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
      <Header />
      <motion.main
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex bg-gradient-to-r from-[#121212]/20 via-[#232323]/20 to-[#121212]/20 flex-col h-screen overflow-hidden"
      >
        <div className="relative flex items-center justify-center">
          <Image
            src="/static/images/sub/phoneTransp.png"
            width={1600}
            height={1400}
            alt=""
            priority
            quality={100}
            className="h-[100vh] pointer-events-none aspect-[1600/1400] max-w-none object-contain object-bottom w-[52vw] z-[3] relative"
          />
          <div className="bg-gradient-to-b ml-[2.7%] px-8 pt-12 flex flex-col items-center  from-[#0E2520] via-[#174B3B] to-[#185342] aspect-[2/4] h-auto w-[15vw] absolute z-[2] rounded-3xl">
            <span className="mt-16 block w-11">
              <svg
                width="100%"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0015 0C9.85043 0 0 9.84974 0 22C0 34.1503 9.85043 44 22.0015 44C34.1526 44 44 34.1503 44 22C44 9.84974 34.1496 0 22.0015 0ZM31.1523 18.7249H26.1568C26.5143 16.9407 25.6893 15.5964 23.1656 15.5964C20.9169 15.5964 19.7345 16.6657 19.7345 18.12C19.7345 19.2168 20.4494 19.9317 22.2612 19.9317H23.7981C27.9411 19.9317 30.0799 21.9083 30.0799 25.1987C30.0799 28.9046 27.3087 31.8406 22.1787 32.1705L21.8763 34.3091H17.4857L18.1457 31.8681C14.632 30.9882 12.7652 28.5196 12.9852 25.0337H17.9532C17.6232 27.2029 19.0776 28.5471 21.4363 28.5471C23.5781 28.5471 24.9224 27.4229 24.9224 25.7486C24.9224 24.4869 24.1525 23.6345 22.1237 23.6345H20.5869C16.6363 23.6345 14.577 21.6334 14.577 18.6149C14.577 14.9915 17.5132 12.5505 21.7663 12.0281L22.1237 9.66949H26.5143L25.8268 12.1655C29.3405 12.8529 31.3723 15.1565 31.1523 18.7249Z"
                  fill="#EDEDED"
                />
              </svg>
            </span>
            <div className="flex flex-col text-center items-center mt-6 gap-2">
              <h1 className="text-white">Subscribed successfully!</h1>
              <p className="text-sm text-[#c1c1c1]">
                You will soon receive a <br />
                confirmation email.
              </p>
            </div>
            <Link
              href="/account"
              className="bg-[#121212]/20 py-3 mt-24 px-20 text-white rounded-full text-lg"
            >
              Enjoy!
            </Link>
          </div>
        </div>
      </motion.main>
    </>
  );
}
