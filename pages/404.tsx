import Head from 'next/head';

export default function Error404() {
  return (
    <>
      <Head>
        <title>Profit Saloon - Error 404</title>
        <meta name="description" content="Created by SOHub" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="w-screen h-screen error-404 flex flex-row items-center px-32">
        <div className="error-404-text flex flex-col items-start gap-4 z-20">
          <span className="text-xl font-medium uppercase text-[#818181]">
            Error 404
          </span>
          <h1 className="text-5xl font-medium text-[#EDEDED]">
            Go to our main page by clicking
            <br />
            the button below.
          </h1>
          <p className="text-2xl text-[#818181]">
            Now that you are here, don&apos;t forget that you can earn a 20%{' '}
            <br />
            commission every month for every customer you <br />
            refer to join our courses.
          </p>
        </div>
      </main>
    </>
  );
}
