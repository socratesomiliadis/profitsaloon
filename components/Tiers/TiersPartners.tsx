import Image from "next/image";
import { useEffect } from "react";

function PartnerCard({
  title,
  name,
  location,
  imgURL,
}: {
  title: string;
  name: string;
  location: string;
  imgURL: string;
}) {
  return (
    <div className="card flex flex-col basis-1/4 aspect-[1/1.25] h-auto relative rounded-xl">
      <div className="card-content">
        <div className="card-image relative w-full aspect-[1/1] h-auto">
          <Image
            src={imgURL}
            width={1280}
            height={720}
            alt=""
            className="w-full h-full aspect-[1/1] object-center object-cover rounded-xl"
          />
        </div>
        <div className="card-info-wrapper">
          <div className="card-info">
            <div className="mt-4 w-full flex flex-row text-white justify-between">
              <span>{name}</span>
              <span className="text-[#818181]">{location}</span>
            </div>
            <span className="text-[#818181]">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TiersPartners() {
  useEffect(() => {
    const cards = document.querySelector(".cards") as HTMLElement;

    cards.onmousemove = (e) => {
      const allCards = document.querySelectorAll(
        ".card"
      ) as NodeListOf<HTMLElement>;
      //@ts-expect-error
      for (const card of allCards) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);
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
      <div className="cards mt-16 flex flex-row gap-6 px-[15vw]">
        <PartnerCard
          name="Niall Colman"
          location="China"
          title="Artificial Intelligence Professor"
          imgURL="/static/images/partners/1.png"
        />
        <PartnerCard
          name="Tommaso Beretta"
          location="UK"
          title="Cashflow Professor"
          imgURL="/static/images/partners/2.png"
        />
        <PartnerCard
          name="Iman Gadzhilovicdebrov"
          location="USA"
          title="Marketing Strategy Professor"
          imgURL="/static/images/partners/3.png"
        />
        <PartnerCard
          name="Boris Peshev"
          title="Crypto Professor"
          location="Netherlands"
          imgURL="/static/images/partners/4.png"
        />
      </div>
    </section>
  );
}
