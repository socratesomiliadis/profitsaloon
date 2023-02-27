import Head from 'next/head';
import { NextStudio } from 'next-sanity/studio';
import { NextStudioHead } from 'next-sanity/studio/head';

import config from '../../lib/sanity.config';

export default function StudioPage() {
  return (
    <>
      <Head>
        <title>ProfitSaloon CMS</title>
        <NextStudioHead />
      </Head>
      <NextStudio config={config} />
    </>
  );
}
