import TierCard from "./TierCard";

export default function TierSection() {
  return (
    <section className="tier-section flex h-[180vh] w-screen flex-col items-center pt-32">
      <div className="flex flex-col items-center gap-4">
        <span className="text-center text-5xl font-medium text-[#ededed]">
          Increase your earnings through participation
          <br />
          in our affiliate program.
        </span>
        <p className="text-center text-xl text-[#818181]">
          Participate in a professional community where individuals are
          dedicated <br />
          to building successful businesses, creating strong brands, and
          increasing revenue.
        </p>
      </div>
      <div className="mt-32 flex w-full flex-row items-center gap-10 px-64">
        <TierCard
          title="Student"
          price="28,99"
          fromColor="#3571A9"
          toColor="#02305C"
        />
        <TierCard
          title="Scholar"
          price="88,99"
          fromColor="#881111"
          toColor="#FF7A7A"
        />
        <TierCard
          title="Expert"
          price="28,99"
          fromColor="#95780A"
          toColor="#E8D694"
        />
      </div>
    </section>
  );
}
