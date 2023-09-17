import Image from "next/image";
import Link from "next/link";
import Player from "../VideoPlayer/Player";
import { useState } from "react";
import PlayerWithtThumbnail from "../VideoPlayer/PlayerWithThumb";

function NewsBtn({ text, link }: { text: string; link: string }) {
  return (
    <Link
      href={link}
      className="p-[1px] overflow-hidden rounded-full bg-gradient-to-b from-[#c3c3c3] to-[#818181]/0"
    >
      <div className="bg-gradient-to-b from-[#F0F0F0] via-white to-[#f8f8f8] rounded-full overflow-hidden px-8 py-3 flex flex-row items-center whitespace-nowrap gap-2">
        <span className="w-4">
          <svg
            width="100%"
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.75784 5.18725V3.89044H6.81498V5.18725H4.75784Z"
              fill="#282828"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.643555 1.29681C0.643555 0.580603 1.25756 0 2.01498 0H9.55784C10.3153 0 10.9293 0.580603 10.9293 1.29681V5.18725H12.9864C13.7438 5.18725 14.3578 5.76785 14.3578 6.48406V9.40189C14.3578 10.6553 13.2833 11.6713 11.9578 11.6713H3.04355C1.71807 11.6713 0.643555 10.6553 0.643555 9.40189V1.29681ZM11.9578 10.3745C12.5259 10.3745 12.9864 9.93905 12.9864 9.40189V6.48406H10.9293V9.40189C10.9293 9.93905 11.3898 10.3745 11.9578 10.3745ZM3.38641 8.42928C3.38641 8.07118 3.69342 7.78088 4.07213 7.78088H7.5007C7.87941 7.78088 8.18641 8.07118 8.18641 8.42928C8.18641 8.78739 7.87941 9.07769 7.5007 9.07769H4.07213C3.69342 9.07769 3.38641 8.78739 3.38641 8.42928ZM4.07213 2.59363C3.69342 2.59363 3.38641 2.88393 3.38641 3.24203V5.83566C3.38641 6.19376 3.69342 6.48406 4.07213 6.48406H7.5007C7.87941 6.48406 8.18641 6.19376 8.18641 5.83566V3.24203C8.18641 2.88393 7.87941 2.59363 7.5007 2.59363H4.07213Z"
              fill="#282828"
            />
          </svg>
        </span>
        <span className="text-sm">{text}</span>
      </div>
    </Link>
  );
}

function HeroVideo() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="mt-12 rounded-2xl relative w-1/2 aspect-video h-auto overflow-hidden">
      <PlayerWithtThumbnail
        url="/static/videos/tiersVid.mp4"
        thumbURL="/static/images/karaflas.png"
      />
    </div>
  );
}

export default function TiersHero() {
  return (
    <section className="pt-72 w-screen flex flex-col items-center">
      <NewsBtn
        link="/"
        text="New: The mindset course will be free until 06/06"
      />
      <div className="mt-6 flex flex-col text-center items-center gap-4 z-10">
        <h3 className="text-5xl font-medium text-[#ededed]">
          Increase your earnings <br />
          through participation in our programs.
        </h3>
        <p className="text-[#818181] text-xl font-medium">
          Participate in a professional community where individuals are
          dedicated to <br />
          building successful businesses, creating strong brands, and increasing
          revenue.
        </p>
      </div>
      <HeroVideo />
    </section>
  );
}
