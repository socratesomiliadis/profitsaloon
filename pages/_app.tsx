import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { MyUserContextProvider } from "@/utils/getUser";
import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import AuthPopupProvider from "@/hooks/useAuthPopup";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps }: AppProps) {
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
        <MyUserContextProvider>
          <AuthPopupProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthPopupProvider>
        </MyUserContextProvider>
      </ClerkProvider>
    </div>
  );
}
