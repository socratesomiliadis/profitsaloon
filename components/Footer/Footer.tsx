import FooterLinkColumn from "./FooterLinkColumn";
import Link from "next/link";
import MailchimpForm from "./MailchimpForm";

export default function Footer() {
  return (
    <footer className="w-full min-h-[80vh] py-8 lg:py-32 bg-black flex flex-col items-center">
      <span className="relative w-[90vw] overflow-hidden">
        <div className="z-[2] absolute w-full h-2/3 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"></div>
        <svg
          width="100%"
          viewBox="0 0 1622 216"
          className="-mb-[1%] z-[1]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 21.8643H85.0251C122.814 21.8643 150.076 43.7279 150.076 80.977C150.076 118.496 122.814 139.55 85.0251 139.55H35.6296V210.809H0V21.8643ZM77.4674 110.668C99.6009 110.668 113.367 99.3316 113.367 80.977C113.367 62.6224 99.6009 50.7458 77.4674 50.7458H35.6296V110.668H77.4674Z"
            fill="url(#paint0_linear_2824_9)"
          />
          <path
            d="M171.67 62.3525H205.14V85.8357H205.68C212.698 70.99 222.145 62.3525 241.849 62.3525H256.155V90.1545H235.641C215.127 90.1545 205.68 101.221 205.68 125.514V210.809H171.67V62.3525Z"
            fill="url(#paint1_linear_2824_9)"
          />
          <path
            d="M260.742 136.577C260.742 85.8314 294.212 57.7598 336.05 57.7598C377.888 57.7598 411.358 85.8314 411.358 136.577C411.358 187.322 377.888 215.394 336.05 215.394C294.212 215.394 260.742 187.322 260.742 136.577ZM336.05 188.401C359.533 188.401 374.919 170.857 374.919 136.577C374.919 102.297 359.533 84.7519 336.05 84.7519C312.567 84.7519 297.182 102.297 297.182 136.577C297.182 170.857 312.567 188.401 336.05 188.401Z"
            fill="url(#paint2_linear_2824_9)"
          />
          <path
            d="M483.692 0H549.823V27.532H491.52C479.373 27.532 471.816 34.5499 471.816 49.6655V62.3517H534.437C542.535 62.3517 548.743 68.56 548.743 76.6576V210.808H514.733V90.1537H471.816V210.808H437.806V90.1537H418.911V62.3517H437.806V45.8866C437.806 16.7351 454.001 0 483.692 0Z"
            fill="url(#paint3_linear_2824_9)"
          />
          <path
            d="M594.098 170.591V90.1544H565.486V62.3524H594.098V21.8643H628.378V62.3524H673.185V90.1544H628.378V165.462C628.378 178.149 634.856 183.007 646.193 183.007H673.995V210.809H634.586C608.134 210.809 594.098 197.583 594.098 170.591Z"
            fill="url(#paint4_linear_2824_9)"
          />
          <path
            d="M744.711 145.484H781.96C783.04 172.476 798.695 186.512 825.687 186.512C851.06 186.512 866.445 174.095 866.445 154.121C866.445 139.815 858.348 128.479 832.975 128.479H808.952C767.115 128.479 747.41 107.155 747.41 76.924C747.41 41.0245 775.482 17.2715 824.068 17.2715C875.083 17.2715 899.916 43.4538 900.995 83.4021H864.556C863.476 58.5694 849.98 46.1529 823.798 46.1529C798.965 46.1529 784.119 56.9498 784.119 75.0345C784.119 88.5305 792.487 98.5176 815.43 98.5176H839.453C886.959 98.5176 903.694 123.62 903.694 152.232C903.694 190.561 874.543 215.393 825.148 215.393C773.863 215.393 746.061 188.671 744.711 145.484Z"
            fill="url(#paint5_linear_2824_9)"
          />
          <path
            d="M972.524 215.394C943.643 215.394 921.239 198.928 921.239 167.887C921.239 133.877 948.231 120.921 977.653 120.921H1001.68C1016.52 120.921 1023.27 114.983 1023.27 104.726C1023.27 91.2299 1010.85 84.7519 994.928 84.7519C975.763 84.7519 963.617 93.9292 962.537 110.394H926.908C929.067 78.5437 949.851 57.7598 994.388 57.7598C1039.46 57.7598 1057.28 79.3534 1057.28 109.315V173.016C1057.28 180.304 1059.98 183.003 1067.27 183.003H1072.93V210.805H1049.72C1033.53 210.805 1024.62 202.707 1024.62 188.671V183.003H1024.08C1014.63 205.137 995.468 215.394 972.524 215.394ZM983.051 187.862C1003.3 187.862 1023.27 175.175 1023.27 144.404V130.638H1022.73C1018.14 139.816 1009.5 144.404 994.118 144.944L983.051 145.484C965.236 146.024 957.679 154.931 957.679 166.538C957.679 178.144 965.236 187.862 983.051 187.862Z"
            fill="url(#paint6_linear_2824_9)"
          />
          <path
            d="M1092.91 0H1126.92V210.808H1092.91V0Z"
            fill="url(#paint7_linear_2824_9)"
          />
          <path
            d="M1150.41 136.577C1150.41 85.8314 1183.88 57.7598 1225.72 57.7598C1267.56 57.7598 1301.03 85.8314 1301.03 136.577C1301.03 187.322 1267.56 215.394 1225.72 215.394C1183.88 215.394 1150.41 187.322 1150.41 136.577ZM1225.72 188.401C1249.2 188.401 1264.59 170.857 1264.59 136.577C1264.59 102.297 1249.2 84.7519 1225.72 84.7519C1202.23 84.7519 1186.85 102.297 1186.85 136.577C1186.85 170.857 1202.23 188.401 1225.72 188.401Z"
            fill="url(#paint8_linear_2824_9)"
          />
          <path
            d="M1317.75 136.577C1317.75 85.8314 1351.22 57.7598 1393.06 57.7598C1434.9 57.7598 1468.37 85.8314 1468.37 136.577C1468.37 187.322 1434.9 215.394 1393.06 215.394C1351.22 215.394 1317.75 187.322 1317.75 136.577ZM1393.06 188.401C1416.55 188.401 1431.93 170.857 1431.93 136.577C1431.93 102.297 1416.55 84.7519 1393.06 84.7519C1369.58 84.7519 1354.19 102.297 1354.19 136.577C1354.19 170.857 1369.58 188.401 1393.06 188.401Z"
            fill="url(#paint9_linear_2824_9)"
          />
          <path
            d="M1491.85 62.3483H1525.32V85.0217H1525.86C1534.77 67.4769 1550.96 57.7598 1571.48 57.7598C1601.71 57.7598 1621.68 78.2736 1621.68 117.682V210.805H1587.67V121.731C1587.67 95.8185 1576.33 85.0217 1559.6 85.0217C1542.59 85.0217 1525.86 96.0884 1525.86 125.78V210.805H1491.85V62.3483Z"
            fill="url(#paint10_linear_2824_9)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2824_9"
              x1="75.038"
              y1="21.8643"
              x2="75.038"
              y2="210.809"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FF57" />
              <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2824_9"
              x1="213.913"
              y1="62.3525"
              x2="213.913"
              y2="210.809"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FF57" />
              <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2824_9"
              x1="336.05"
              y1="57.7598"
              x2="336.05"
              y2="215.394"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FF57" />
              <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_2824_9"
              x1="484.367"
              y1="0"
              x2="484.367"
              y2="210.808"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FF57" />
              <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_2824_9"
              x1="619.74"
              y1="21.8643"
              x2="619.74"
              y2="210.809"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FF57" />
              <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_2824_9"
              x1="824.203"
              y1="17.2715"
              x2="824.203"
              y2="215.393"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FF57" />
              <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_2824_9"
              x1="997.087"
              y1="57.7598"
              x2="997.087"
              y2="215.394"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FF57" />
              <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_2824_9"
              x1="1109.91"
              y1="0"
              x2="1109.91"
              y2="210.808"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FF57" />
              <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_2824_9"
              x1="1225.72"
              y1="57.7598"
              x2="1225.72"
              y2="215.394"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FF57" />
              <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_2824_9"
              x1="1393.06"
              y1="57.7598"
              x2="1393.06"
              y2="215.394"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FF57" />
              <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_2824_9"
              x1="1556.76"
              y1="57.7598"
              x2="1556.76"
              y2="210.805"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FF57" />
              <stop offset="1" stopColor="#0B0B0B" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <div className="w-full flex flex-col gap-16 md:gap-64 border-t-[1px] border-[#1a1a1a] justify-between pt-14 px-6 lg:px-16 xl:px-[6vw] 2xl:px-[8vw]">
        <div className="flex flex-row w-full items-start justify-between z-20">
          <div className="flex flex-col gap-16 w-full 2xl:w-fit">
            <MailchimpForm />
          </div>
          <div className="hidden flex-row gap-32 3xl:gap-44 2xl:flex">
            <FooterLinkColumn
              title="Products"
              links={[
                {
                  title: "Courses",
                  href: "/account/courses",
                  external: false,
                },
              ]}
            />
            <FooterLinkColumn
              title="Resources"
              links={[
                {
                  title: "Support",
                  href: "/support",
                  external: false,
                },
                {
                  title: "FAQ",
                  href: "/faq",
                  external: false,
                },
                {
                  title: "Contact",
                  href: "/contact",
                  external: false,
                },
              ]}
            />
            <FooterLinkColumn
              title="Social Media"
              links={[
                {
                  title: "Twitter",
                  href: "https://twitter.com/ProfitSaloon",
                  external: true,
                },
                {
                  title: "Instagram",
                  href: "https://www.instagram.com/profitsaloon/",
                  external: true,
                },
                {
                  title: "YouTube",
                  href: "https://www.youtube.com/@profitsaloon",
                  external: true,
                },
                {
                  title: "TikTok",
                  href: "https://www.tiktok.com/@profitsaloon",
                  external: true,
                },
                {
                  title: "LinkedIn",
                  href: "https://www.linkedin.com/company/profitsaloon/",
                  external: true,
                },
              ]}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 z-20">
          <div className="w-full flex flex-col xl:flex-row xl:items-center gap-6 xl:gap-0 xl:justify-between text-lg">
            <div className="flex flex-col xl:flex-row xl:items-center gap-6 xl:gap-8">
              <span className="text-[#5A5A5A]">{`© ${new Date().getFullYear()} — Profit Saloon Inc.`}</span>
              <Link
                href="/privacy-policy"
                target="_blank"
                className="text-[#5A5A5A] hover:text-[#EDEDED] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                target="_blank"
                className="text-[#5A5A5A] hover:text-[#EDEDED] transition-colors duration-300"
              >
                Terms of use
              </Link>
            </div>
            <Link
              href="https://sohub.digital"
              target="_blank"
              className="flex flex-row items-center gap-2"
            >
              <span className="text-[#5A5A5A] text-lg">Website by</span>
              <span className="text-[#EDEDED] hidden sm:block">SOHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
