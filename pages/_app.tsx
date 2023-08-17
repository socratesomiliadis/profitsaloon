import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={inter.style} className="font-wrapper">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
