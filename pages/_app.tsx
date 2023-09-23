import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { MyUserContextProvider } from "@/utils/getUser";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import HeaderThemeProvider from "@/hooks/useHeaderTheme";
import { Toaster } from "sonner";

export const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div style={inter.style} className="font-wrapper">
      <ClerkProvider
        appearance={{
          variables: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 400,
            colorPrimary: "#fff",
            colorText: "#fff",
            fontSmoothing: "never",
          },
          elements: {
            badge:
              "py-1 px-4 rounded-md text-xs bg-gradient-to-r from-[#121212] via-[#232323] to-[#121212]",
            formFieldInput:
              "bg-transparent focus:shadow-none bg-gradient-to-r w-[500px] text-white border-[#282828] border-[1px] rounded-xl from-[#121212] via-[#232323] to-[#121212]",
            formButtonPrimary:
              "rounded-full font-normal capitalize text-sm px-8 py-2 bg-white text-black tracking-tight",
            formButtonReset:
              "rounded-full font-normal capitalize text-sm px-8 py-2 bg-[#282828] text-white tracking-tight",
            otpCodeFieldInput: "text-white",
            profileSectionPrimaryButton: "w-[230px] hover:bg-[#282828]/50",
            form: "items-start",
            formFieldInput__signOutOfOtherSessions: "checkbox-clerk",
            accordionTriggerButton: "focus:shadow-none",
          },
        }}
        {...pageProps}
      >
        <MyUserContextProvider>
          <HeaderThemeProvider>
            <NextUIProvider
              style={{
                fontFamily: inter.style.fontFamily,
              }}
            >
              <Layout>
                <Toaster richColors />
                <AnimatePresence mode="wait">
                  <Component {...pageProps} key={router.pathname} />
                </AnimatePresence>
              </Layout>
            </NextUIProvider>
          </HeaderThemeProvider>
        </MyUserContextProvider>
      </ClerkProvider>
    </div>
  );
}
