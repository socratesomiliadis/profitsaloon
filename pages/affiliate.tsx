import Initial from '@/components/Affiliate/Initial';
import Head from 'next/head';

export default function Affiliate() {
  return (
    <>
      <Head>
        <title>Profit Saloon</title>
        <meta name="description" content="Created by SOHub" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Initial />
      </main>
    </>
  );
}
