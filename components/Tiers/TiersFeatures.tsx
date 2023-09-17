function FeatureCard() {
  return (
    <div className="basis-1/2 aspect-[1/1.5] rounded-xl h-auto border-[#2B2B2B] border-[1px] bg-gradient-to-r from-[#121212]/50 via-[#232323]/50 to-[#121212]/50"></div>
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
      <div className="flex flex-row w-full px-[20vw]">
        <FeatureCard />
      </div>
    </section>
  );
}
