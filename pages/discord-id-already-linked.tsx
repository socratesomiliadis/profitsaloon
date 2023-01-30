import Head from 'next/head';

export default function Error404() {
  return (
    <>
      <Head>
        <title>Profit Saloon - Error</title>
        <meta name="description" content="Created by SOHub" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="w-screen h-screen error-404 flex flex-row items-center  px-32">
        <div className="discord-link-error-text z-20 flex flex-col items-start gap-4">
          <span className="text-xl font-medium uppercase text-[#818181]">
            Error Linking Discord
          </span>
          <h1 className="text-5xl font-medium text-[#EDEDED]">
            The discord account you were trying to link is already <br /> linked
            to another user.
          </h1>
          <p className="text-2xl text-[#818181]">
            Now that you are here, don&apos;t forget that you can earn a 20%{' '}
            <br />
            commission every month for every customer you <br />
            refer to join our courses.
          </p>
        </div>
      </div>
    </>
  );
}
