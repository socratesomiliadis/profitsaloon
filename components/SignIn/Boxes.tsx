import Image from "next/image";
import Link from "next/link";
import LeftItem from "./LeftItem";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SignIn from "./SignIn";
import { useUser } from "@clerk/nextjs";
import ForgotPassword from "./ForgotPassword";

export default function Boxes({ children }: { children?: React.ReactNode }) {
  const [resetPassword, setResetPassword] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className="w-screen px-6 lg:px-64 2xl:px-72">
      <div className="relative w-full h-[83vh] rounded-3xl border-[#2B2B2B] border-[1px] flex flex-row">
        <svg
          width="70%"
          className="absolute breathe z-0 top-1/2 transform left-[-20%] -translate-y-1/2"
          viewBox="0 0 1046 1046"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="522.948"
            cy="522.948"
            r="522.948"
            fill="url(#paint0_radial_2879_65)"
          />
          <g filter="url(#filter0_f_2879_65)">
            <circle
              cx="522.382"
              cy="522.383"
              r="186.928"
              stroke="#52FF00"
              strokeWidth="4.51791"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2879_65"
              x="260.909"
              y="260.909"
              width="522.947"
              height="522.948"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="36.1432"
                result="effect1_foregroundBlur_2879_65"
              />
            </filter>
            <radialGradient
              id="paint0_radial_2879_65"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(522.948 522.948) rotate(90) scale(522.948)"
            >
              <stop stopColor="#00FF38" stopOpacity="0.08" />
              <stop offset="0.9375" stopColor="#9F9F9F" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <aside className="z-[1] w-[30%] h-full border-r-[1px] border-[#2b2b2b] relative flex flex-col justify-between p-10">
          <Link href="/" className="w-1/2">
            <svg
              width="100%"
              viewBox="0 0 229 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4867 0C10.0676 0 0 10.0669 0 22.4851C0 34.9033 10.0676 44.9703 22.4867 44.9703C34.9057 44.9703 44.9703 34.9033 44.9703 22.4851C44.9703 10.0669 34.9026 0 22.4867 0ZM31.8392 19.1378H26.7336C27.0989 17.3143 26.2558 15.9404 23.6764 15.9404C21.3781 15.9404 20.1696 17.0332 20.1696 18.5196C20.1696 19.6405 20.9004 20.3712 22.7521 20.3712H24.3229C28.5573 20.3712 30.7432 22.3915 30.7432 25.7544C30.7432 29.542 27.9109 32.5427 22.6678 32.8799L22.3587 35.0657H17.8713L18.5458 32.5708C14.9547 31.6715 13.0467 29.1486 13.2716 25.5858H18.3491C18.0118 27.8028 19.4983 29.1767 21.909 29.1767C24.098 29.1767 25.472 28.0276 25.472 26.3164C25.472 25.0268 24.6851 24.1557 22.6116 24.1557H21.0409C17.0032 24.1557 14.8985 22.1104 14.8985 19.0254C14.8985 15.3221 17.8994 12.8272 22.2462 12.2933L22.6116 9.88272H27.0989L26.3963 12.4338C29.9875 13.1364 32.0641 15.4907 31.8392 19.1378Z"
                fill="#fff"
              />
              <path
                d="M61.0308 13.498H69.8019C73.7001 13.498 76.5124 15.7535 76.5124 19.5961C76.5124 23.4665 73.7001 25.6384 69.8019 25.6384H64.7063V32.9894H61.0308V13.498ZM69.0222 22.659C71.3055 22.659 72.7256 21.4895 72.7256 19.5961C72.7256 17.7026 71.3055 16.4774 69.0222 16.4774H64.7063V22.659H69.0222Z"
                fill="#fff"
              />
              <path
                d="M78.7402 17.6748H82.193V20.0973H82.2487C82.9726 18.5658 83.9472 17.6748 85.9799 17.6748H87.4556V20.5428H85.3394C83.2232 20.5428 82.2487 21.6845 82.2487 24.1905V32.9894H78.7402V17.6748Z"
                fill="#fff"
              />
              <path
                d="M87.9287 25.3323C87.9287 20.0975 91.3815 17.2017 95.6974 17.2017C100.013 17.2017 103.466 20.0975 103.466 25.3323C103.466 30.5671 100.013 33.463 95.6974 33.463C91.3815 33.463 87.9287 30.5671 87.9287 25.3323ZM95.6974 30.6785C98.1199 30.6785 99.707 28.8686 99.707 25.3323C99.707 21.796 98.1199 19.9861 95.6974 19.9861C93.2749 19.9861 91.6878 21.796 91.6878 25.3323C91.6878 28.8686 93.2749 30.6785 95.6974 30.6785Z"
                fill="#fff"
              />
              <path
                d="M110.928 11.2427H117.75V14.0828H111.736C110.483 14.0828 109.703 14.8068 109.703 16.3661V17.6748H116.163C116.998 17.6748 117.639 18.3152 117.639 19.1506V32.9894H114.13V20.5428H109.703V32.9894H106.195V20.5428H104.246V17.6748H106.195V15.9763C106.195 12.9691 107.865 11.2427 110.928 11.2427Z"
                fill="#fff"
              />
              <path
                d="M122.318 28.8405V20.5428H119.366V17.6748H122.318V13.498H125.854V17.6748H130.476V20.5428H125.854V28.3115C125.854 29.6202 126.522 30.1214 127.692 30.1214H130.56V32.9894H126.494C123.765 32.9894 122.318 31.625 122.318 28.8405Z"
                fill="#fff"
              />
              <path
                d="M137.855 26.2512H141.697C141.809 29.0356 143.424 30.4835 146.208 30.4835C148.826 30.4835 150.413 29.2027 150.413 27.1422C150.413 25.6664 149.577 24.4969 146.96 24.4969H144.482C140.166 24.4969 138.133 22.2972 138.133 19.1786C138.133 15.4752 141.029 13.0249 146.041 13.0249C151.304 13.0249 153.865 15.7258 153.977 19.8469H150.218C150.106 17.2851 148.714 16.0043 146.013 16.0043C143.452 16.0043 141.92 17.1181 141.92 18.9837C141.92 20.3759 142.783 21.4062 145.15 21.4062H147.628C152.529 21.4062 154.255 23.9957 154.255 26.9473C154.255 30.9012 151.248 33.4629 146.152 33.4629C140.862 33.4629 137.994 30.7063 137.855 26.2512Z"
                fill="#fff"
              />
              <path
                d="M161.355 33.463C158.376 33.463 156.065 31.7645 156.065 28.5623C156.065 25.0539 158.849 23.7173 161.885 23.7173H164.363C165.894 23.7173 166.59 23.1047 166.59 22.0466C166.59 20.6544 165.309 19.9861 163.667 19.9861C161.69 19.9861 160.437 20.9329 160.325 22.6314H156.65C156.872 19.3457 159.016 17.2017 163.611 17.2017C168.261 17.2017 170.099 19.4292 170.099 22.52V29.0914C170.099 29.8432 170.377 30.1216 171.129 30.1216H171.714V32.9896H169.319C167.648 32.9896 166.729 32.1543 166.729 30.7064V30.1216H166.674C165.699 32.4049 163.722 33.463 161.355 33.463ZM162.441 30.6228C164.53 30.6228 166.59 29.3141 166.59 26.1398V24.7197H166.535C166.061 25.6665 165.17 26.1398 163.583 26.1955L162.441 26.2512C160.604 26.3069 159.824 27.2258 159.824 28.4231C159.824 29.6204 160.604 30.6228 162.441 30.6228Z"
                fill="#fff"
              />
              <path
                d="M173.774 11.2427H177.283V32.9894H173.774V11.2427Z"
                fill="#fff"
              />
              <path
                d="M179.706 25.3323C179.706 20.0975 183.158 17.2017 187.474 17.2017C191.79 17.2017 195.243 20.0975 195.243 25.3323C195.243 30.5671 191.79 33.463 187.474 33.463C183.158 33.463 179.706 30.5671 179.706 25.3323ZM187.474 30.6785C189.897 30.6785 191.484 28.8686 191.484 25.3323C191.484 21.796 189.897 19.9861 187.474 19.9861C185.052 19.9861 183.465 21.796 183.465 25.3323C183.465 28.8686 185.052 30.6785 187.474 30.6785Z"
                fill="#fff"
              />
              <path
                d="M196.969 25.3323C196.969 20.0975 200.422 17.2017 204.738 17.2017C209.054 17.2017 212.507 20.0975 212.507 25.3323C212.507 30.5671 209.054 33.463 204.738 33.463C200.422 33.463 196.969 30.5671 196.969 25.3323ZM204.738 30.6785C207.16 30.6785 208.748 28.8686 208.748 25.3323C208.748 21.796 207.16 19.9861 204.738 19.9861C202.315 19.9861 200.728 21.796 200.728 25.3323C200.728 28.8686 202.315 30.6785 204.738 30.6785Z"
                fill="#fff"
              />
              <path
                d="M214.929 17.675H218.382V20.014H218.437C219.356 18.2041 221.027 17.2017 223.143 17.2017C226.262 17.2017 228.322 19.3178 228.322 23.3832V32.9896H224.814V23.8009C224.814 21.1278 223.644 20.014 221.918 20.014C220.164 20.014 218.437 21.1556 218.437 24.2185V32.9896H214.929V17.675Z"
                fill="#fff"
              />
            </svg>
          </Link>
          <Image
            src="/static/images/ProfitCoin.png"
            width={600}
            height={600}
            alt="Profit Saloon Coin"
            className="absolute profit-coin z-0 w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="flex flex-col gap-5">
            <LeftItem
              icon={
                <svg
                  width="100%"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.99979 0C2.73577 0 1.71107 0.95434 1.71107 2.13158C1.71107 3.30882 2.73577 4.26316 3.99979 4.26316C5.26381 4.26316 6.28851 3.30882 6.28851 2.13158C6.28851 0.95434 5.26381 0 3.99979 0Z"
                    fill="currentColor"
                  />
                  <path
                    d="M4 4.97368C2.10712 4.97368 0.661288 6.02799 0.0730941 7.50919C-0.0827538 7.90165 0.0231869 8.28725 0.271875 8.56328C0.515304 8.83347 0.893336 9 1.30279 9H6.69721C7.10666 9 7.4847 8.83347 7.72813 8.56328C7.97681 8.28725 8.08275 7.90165 7.92691 7.50919C7.33871 6.02799 5.89288 4.97368 4 4.97368Z"
                    fill="currentColor"
                  />
                </svg>
              }
              title="Don't have an account?"
              desc="Sign up."
              index={0}
            />
          </div>
        </aside>
        <main className="w-[70%] z-[1] relative flex flex-col items-center justify-center py-10 gap-12">
          <AnimatePresence mode="wait">
            {resetPassword ? (
              <ForgotPassword setResetPassword={setResetPassword} />
            ) : (
              <SignIn setResetPassword={setResetPassword} />
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
