import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import TiersHero from "@/components/Tiers/TiersHero";
import TiersFeatures from "@/components/Tiers/TiersFeatures";
import { useHeaderTheme } from "@/hooks/useHeaderTheme";
import { useLayoutEffect } from "react";
import TiersPartners from "@/components/Tiers/TiersPartners";
import Image from "next/image";
import TierSection from "@/components/Home/TierSection";

export default function Tiers() {
  const { setHeaderTheme } = useHeaderTheme();
  useLayoutEffect(() => {
    setHeaderTheme("dark");
  }, []);

  return (
    <>
      <Head>
        <title>Profit Saloon — Tiers</title>
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
      <main className="bg-black selection:bg-profitGreen selection:text-profitBlack">
        <TiersHero />
        {/* <TiersNav /> */}
        <TiersFeatures />
        <TiersPartners />
        <div className="flex items-center justify-center mt-24 -mb-16">
          <svg
            width="896"
            height="896"
            viewBox="0 0 896 896"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="448"
              cy="448"
              r="447.5"
              stroke="url(#paint0_linear_2472_472)"
              strokeOpacity="0.05"
            />
            <circle
              cx="448"
              cy="448"
              r="320.5"
              stroke="url(#paint1_linear_2472_472)"
              strokeOpacity="0.1"
            />
            <circle
              cx="448"
              cy="448"
              r="187.75"
              stroke="url(#paint2_linear_2472_472)"
              strokeOpacity="0.4"
              strokeWidth="0.5"
            />
            <g filter="url(#filter0_dd_2472_472)">
              <path
                d="M448.005 369C404.372 369 369 404.37 369 448C369 491.63 404.372 527 448.005 527C491.639 527 527 491.63 527 448C527 404.37 491.628 369 448.005 369ZM480.865 436.239H462.927C464.21 429.833 461.248 425.005 452.186 425.005C444.111 425.005 439.865 428.845 439.865 434.067C439.865 438.006 442.432 440.573 448.938 440.573H454.457C469.334 440.573 477.014 447.671 477.014 459.486C477.014 472.794 467.063 483.337 448.642 484.521L447.556 492.201H431.79L434.16 483.435C421.542 480.276 414.839 471.411 415.629 458.894H433.468C432.283 466.683 437.506 471.51 445.976 471.51C453.667 471.51 458.494 467.473 458.494 461.461C458.494 456.93 455.729 453.869 448.444 453.869H442.926C428.74 453.869 421.345 446.684 421.345 435.844C421.345 422.833 431.888 414.068 447.161 412.192L448.444 403.722H464.21L461.742 412.685C474.359 415.154 481.655 423.426 480.865 436.239Z"
                fill="#01FF57"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd_2472_472"
                x="328"
                y="328"
                width="240"
                height="240"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="20.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.282353 0 0 0 0 1 0 0 0 0 0.52549 0 0 0 0.29 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2472_472"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_2472_472"
                  result="effect2_dropShadow_2472_472"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_2472_472"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2472_472"
                x1="187.267"
                y1="87.1511"
                x2="751.228"
                y2="789.402"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A3A3A3" />
                <stop offset="1" stopColor="#555555" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2472_472"
                x1="261.18"
                y1="189.445"
                x2="665.268"
                y2="692.621"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A3A3A3" />
                <stop offset="1" stopColor="#555555" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_2472_472"
                x1="338.585"
                y1="296.572"
                x2="575.248"
                y2="591.267"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#555555" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <TierSection isTiersPage />
        <div className="spacer h-[20vh]"></div>
        <Footer />
      </main>
    </>
  );
}
