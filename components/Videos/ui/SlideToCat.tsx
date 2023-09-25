import { useSwiper } from "swiper/react";
import { useEffect } from "react";

export default function SlideToCat({
  categoryQuery,
}: {
  categoryQuery: string;
}) {
  const swiper = useSwiper();

  useEffect(() => {
    const activeSlideFromQuery = document.querySelector(
      `[data-slide-category=${categoryQuery}]`
    ) as HTMLElement;
    const activeSlideIndex = parseInt(
      activeSlideFromQuery?.dataset?.slideIndex ?? "0"
    );
    const isInViewPort = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    console.log(swiper);
    if (!!swiper && !isInViewPort(activeSlideFromQuery))
      swiper.slideTo(activeSlideIndex, 0, false);
  }, [swiper, categoryQuery]);

  return null;
}
