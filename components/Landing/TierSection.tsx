import Image from 'next/image';
import TierCard from './TierCard';

export default function TierSection() {
  return (
    <section className="tier-section flex h-[200vh] w-screen flex-col items-center pt-32 relative noisy">
      <div className="flex flex-col items-center gap-4 z-10">
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
      <div className="mt-32 flex w-full flex-row items-center gap-10 px-64 z-10">
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
          price="988,99"
          fromColor="#95780A"
          toColor="#E8D694"
        />
      </div>
      <Image
        src="/static/images/grain.png"
        width={3000}
        height={3000}
        quality={100}
        className="absolute inset-0 w-full h-full object-cover z-[1] opacity-80"
        alt=""
        priority={true}
      />
      <Image
        src="/static/images/overlappingCircles.png"
        width={2000}
        height={2000}
        className="mt-[10%] absolute w-[60%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-30 z-0"
        alt=""
      />
    </section>
  );
}
