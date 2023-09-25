import Image from "next/image";

function FeatureCard({
  title,
  subtitle,
  text,
  imgURL,
}: {
  title: React.ReactNode;
  subtitle: string;
  text: React.ReactNode;
  imgURL: string;
}) {
  return (
    <div className="basis-1/2 p-2 aspect-[1/1] flex flex-col justify-between rounded-xl h-auto border-[#2B2B2B] border-[1px] bg-gradient-to-r from-[#121212]/50 via-[#232323]/50 to-[#121212]/50">
      <div className="basis-1/2 flex flex-col items-center justify-center gap-2 z-10 text-center">
        <span className="text-transparent text-lg font-medium bg-clip-text bg-gradient-to-t from-[#00FF0A] to-[#E9FF54]">
          {subtitle}
        </span>
        <h3 className="text-center text-3xl font-medium text-[#ededed]">
          {title}
        </h3>
        <p className="text-[#818181]">{text}</p>
      </div>
      <Image
        src={imgURL}
        width={1280}
        height={720}
        alt=""
        className="basis-1/2 w-full h-auto aspect-video rounded-xl"
      />
    </div>
  );
}

export default function TiersFeatures() {
  return (
    <section className="w-screen flex flex-col mt-64">
      <div className="flex flex-col items-center gap-2 z-10">
        <span className="text-transparent text-xl font-medium bg-clip-text bg-gradient-to-t from-[#00FF0A] to-[#E9FF54]">
          Work with the best
        </span>
        <h3 className="text-center text-5xl font-medium text-[#ededed]">
          Our programs encourages <br />
          collaboration and partnership.
        </h3>
      </div>
      <div className="flex flex-row w-full px-[20vw] gap-6 mt-16">
        <FeatureCard
          subtitle="Get your tickets ready..."
          title={
            <span>
              Join live sessions
              <br />
              with the makers.
            </span>
          }
          text={
            <span>
              Exclusive streams, coming soon
              <br />
              to all friends and founders.
            </span>
          }
          imgURL="/static/images/tiersMockup.png"
        />
        <FeatureCard
          subtitle="Advertise on our platform"
          title={
            <span>
              Reach thousands of
              <br />
              creatives globally.
            </span>
          }
          text={
            <span>
              Advertise your product, service or job
              <br />
              openings on Profit Saloon today.
            </span>
          }
          imgURL="/static/images/tiersMockup.png"
        />
      </div>
    </section>
  );
}
