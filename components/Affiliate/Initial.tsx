import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import Button from '../Button';

export default function Initial() {
  const { RiveComponent } = useRive({
    src: '/static/rive/affiliate.riv',
    stateMachines: 'State Machine 1',
    layout: new Layout({
      fit: Fit.Cover
    }),
    autoplay: true
  });

  return (
    <div className="w-screen h-screen affiliate-page relative flex flex-row items-center justify-between px-32">
      <div className="affiliate-text flex flex-col items-start gap-8 relative z-[4]">
        <span className="text-xl font-medium uppercase text-[#818181]">
          AVAILABLE WORLDWIDE
        </span>
        <h1 className="text-5xl font-medium text-[#EDEDED]">
          Join Profit Saloon&apos;s Affiliate
          <br />
          Program!
        </h1>
        <p className="text-2xl text-[#818181]">
          You can earn a 20% commission every month for <br />
          every customer you refer to join our courses.
        </p>
        <div className="flex flex-row items-center gap-6">
          <Button
            text="Become an affiliate"
            external={true}
            hasArrow={true}
            url="test"
            theme="primary"
          />
          <Button
            text="Info"
            external={false}
            hasArrow={true}
            url="/affiliate/info"
            theme="secondary"
          />
        </div>
      </div>
      <RiveComponent className="rive-canvas relative aspect-[1012/787] z-10 w-[55%] h-auto" />
      {/* <div className="aspect-[1047/803] z-0 w-[50%] absolute right-0 bottom-0">
        <svg
          width="100%"
          viewBox="0 0 1047 803"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_826_63)">
            <circle
              cx="743"
              cy="743"
              r="742.5"
              stroke="url(#paint0_linear_826_63)"
            />
          </g>
          <circle
            cx="743"
            cy="743"
            r="532.5"
            stroke="url(#paint1_linear_826_63)"
          />
          <circle
            cx="743"
            cy="743"
            r="310.75"
            stroke="url(#paint2_linear_826_63)"
            stroke-width="0.5"
          />
          <defs>
            <filter
              id="filter0_b_826_63"
              x="-156"
              y="-156"
              width="1798"
              height="1798"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="78" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_826_63"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_826_63"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_826_63"
              x1="310.579"
              y1="144.539"
              x2="1245.9"
              y2="1309.21"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4F4F4F" />
              <stop offset="1" stopColor="#4A4A4A" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_826_63"
              x1="432.797"
              y1="313.686"
              x2="1103.76"
              y2="1149.18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#949494" />
              <stop offset="1" stopColor="#9C9C9C" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_826_63"
              x1="562"
              y1="492.5"
              x2="953.5"
              y2="980"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
    </div>
  );
}
