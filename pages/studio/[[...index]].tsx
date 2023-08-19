import Head from "next/head";
import { NextStudio } from "next-sanity/studio";

import config from "@/lib/sanity/sanity.config";

export default function StudioPage() {
  return (
    <>
      <Head>
        <title>ProfitSaloon CMS</title>
      </Head>
      <NextStudio config={config} />
    </>
  );
}
