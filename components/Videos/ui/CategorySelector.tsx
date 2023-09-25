import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import { useRouter } from "next/router";
import { transformCategory } from "@/lib/utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { useEffect } from "react";
import SlideToCat from "./SlideToCat";

export default function CategorySelector({
  categories,
}: {
  categories: any[];
}) {
  const router = useRouter();

  const categoryQuery = transformCategory(
    router.query.category?.toString() ?? "all"
  );

  return (
    <div className="mt-3 flex flex-row items-center gap-4 w-full">
      <button className="block w-2 swiper-prev">
        <svg
          width="100%"
          viewBox="0 0 6 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.94334 0.77053C4.57873 0.443678 3.98759 0.443678 3.62298 0.77053L0.878696 3.23063C-0.0328236 4.04776 -0.0328264 5.37259 0.878695 6.18972L3.62298 8.64982C3.98759 8.97667 4.57873 8.97667 4.94334 8.64982C5.30795 8.32297 5.30795 7.79304 4.94334 7.46619L2.19906 5.00608C2.01676 4.84266 2.01676 4.57769 2.19906 4.41427L4.94334 1.95417C5.30795 1.62731 5.30795 1.09738 4.94334 0.77053Z"
            fill="#818181"
          />
        </svg>
      </button>
      <Swiper
        className="w-full"
        spaceBetween={20}
        freeMode={true}
        slidesPerView="auto"
        modules={[Navigation, FreeMode]}
        onSlideChange={(swiper) =>
          console.log("slide change", swiper.activeIndex)
        }
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
      >
        <SlideToCat categoryQuery={categoryQuery} />
        <SwiperSlide data-slide-category="all">
          <button
            onClick={() => {
              router.query.category = "all";
              router.push(router);
            }}
            className={`${
              categoryQuery === "all"
                ? "bg-gradient-to-b from-[#E9FF54] font-medium to-[#00FF0A] text-black"
                : "bg-[#1D1D1D] text-white"
            } text-sm py-[0.3rem] px-10 rounded-xl`}
          >
            All
          </button>
        </SwiperSlide>

        {categories.map((cat: any, index: number) => (
          <SwiperSlide
            style={{
              width: "fit-content !important",
            }}
            data-slide-index={index + 1}
            data-slide-category={transformCategory(cat.title)}
            className="w-fit"
            key={index}
          >
            <button
              onClick={() => {
                router.query.category = transformCategory(cat.title);
                router.push(router);
              }}
              className={`${
                categoryQuery === transformCategory(cat.title)
                  ? "bg-gradient-to-b font-medium from-[#E9FF54] to-[#00FF0A] text-black"
                  : "bg-[#1D1D1D] text-white"
              } text-sm py-[0.3rem] px-10 rounded-xl`}
            >
              {cat.title}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="block w-2 rotate-180 swiper-next">
        <svg
          width="100%"
          viewBox="0 0 6 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.94334 0.77053C4.57873 0.443678 3.98759 0.443678 3.62298 0.77053L0.878696 3.23063C-0.0328236 4.04776 -0.0328264 5.37259 0.878695 6.18972L3.62298 8.64982C3.98759 8.97667 4.57873 8.97667 4.94334 8.64982C5.30795 8.32297 5.30795 7.79304 4.94334 7.46619L2.19906 5.00608C2.01676 4.84266 2.01676 4.57769 2.19906 4.41427L4.94334 1.95417C5.30795 1.62731 5.30795 1.09738 4.94334 0.77053Z"
            fill="#818181"
          />
        </svg>
      </button>
    </div>
  );
}
