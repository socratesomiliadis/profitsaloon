import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { MyUserContextProvider } from "@/utils/getUser";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import AuthPopupProvider from "@/hooks/useAuthPopup";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div style={inter.style} className="font-wrapper">
      <ClerkProvider
        appearance={{
          variables: {
            fontFamily: inter.style.fontFamily,
            colorPrimary: "#1400FF",
            colorAlphaShade: "#0f0f0f",
          },
          elements: {
            badge: "pt-1 pb-[0.1rem] px-2 text-xs",
          },
        }}
        {...pageProps}
      >
        {/* <MyUserContextProvider> */}
        <AuthPopupProvider>
          <Layout>
            <NextUIProvider>
              <AnimatePresence mode="wait">
                <Component {...pageProps} key={router.asPath} />
              </AnimatePresence>
            </NextUIProvider>
          </Layout>
        </AuthPopupProvider>
        {/* </MyUserContextProvider> */}
      </ClerkProvider>
    </div>
  );
}
