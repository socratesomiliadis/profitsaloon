import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isShiftPressed, setIsShiftPressed] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
      if (e.key === '$') {
        e.preventDefault();
        console.log('$');
      }
    });
  }, []);

  return (
    <section className="hero-section flex min-h-screen w-screen flex-col bg-gradient-to-br from-[#000000] to-[#1A1A1A] pt-[25vh]">
      <div className="hero-text flex flex-col items-center gap-4 px-32 z-[4]">
        <span className="text-xl font-medium uppercase text-[#818181]">
          Available Worldwide
        </span>
        <h1 className="text-center text-5xl font-medium text-[#EDEDED]">
          The place where money don&apos;t make you,
          <br />
          you make money.
        </h1>
        <div className="mt-12 flex flex-row items-center gap-2">
          <span className="-mb-1 text-lg text-[#818181]">Press</span>
          <svg
            height="30"
            viewBox="0 0 64 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="63"
              height="23"
              rx="5.5"
              fill="url(#paint0_radial_712_1822)"
              stroke="#818181"
            />
            <path
              d="M24.5398 15.16C26.2898 15.16 27.3598 14.26 27.3598 12.86C27.3598 11.84 26.7998 10.89 25.0198 10.89H24.1198C23.1798 10.89 22.8798 10.49 22.8798 9.97C22.8798 9.24 23.4798 8.79 24.4698 8.79C25.5298 8.79 26.0698 9.3 26.1098 10.28H27.2598C27.1998 8.83 26.3198 7.84 24.4898 7.84C22.7698 7.84 21.7298 8.71 21.7298 10.01C21.7298 11.1 22.4498 11.9 23.9698 11.9H24.8698C25.9298 11.9 26.1998 12.37 26.1998 12.9C26.1998 13.7 25.5798 14.21 24.5598 14.21C23.4698 14.21 22.8398 13.64 22.7898 12.58H21.6298C21.6898 14.17 22.6898 15.16 24.5398 15.16ZM28.4144 15H29.4944V11.94C29.4944 10.72 30.1644 10.25 30.8944 10.25C31.5644 10.25 32.0344 10.65 32.0344 11.74V15H33.1144V11.49C33.1144 10.16 32.3544 9.34 31.2044 9.34C30.3644 9.34 29.7744 9.8 29.4944 10.43H29.4744C29.4944 9.98 29.4944 9.79 29.4944 9.54V7.19H28.4144V15ZM34.264 15H35.344V9.5H34.264V15ZM34.254 8.55H35.354V7.48H34.254V8.55ZM36.8547 8.94V9.5H36.0947V10.41H36.8547V15H37.9347V10.41H39.1347V9.5H37.9347V9.03C37.9347 8.32 38.2747 8.1 38.7747 8.1H39.5347V7.19H38.6147C37.4447 7.19 36.8547 7.83 36.8547 8.94ZM42.2124 15H43.5624V14.09H42.4724C42.0524 14.09 41.8124 13.91 41.8124 13.44V10.41H43.5224V9.5H41.8124V8H40.7324V9.5H39.6524V10.41H40.7324V13.53C40.7324 14.51 41.2424 15 42.2124 15Z"
              fill="#EDEDED"
            />
            <defs>
              <radialGradient
                id="paint0_radial_712_1822"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(32.0183 12) rotate(89.9127) scale(12 32)"
              >
                <stop stopColor="#1A1A1A" />
                <stop offset="1" stopColor="#080808" />
              </radialGradient>
            </defs>
          </svg>
          <span className="-mb-1 text-lg text-[#818181]">+</span>
          <svg
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="5.5"
              fill="url(#paint0_radial_712_1821)"
              stroke="#818181"
            />
            <path
              d="M12.7273 15H13.8073V13.54H14.7073V12.63H13.8073V8H12.4473L9.36727 12.7V13.54H12.7273V15ZM10.4973 12.63V12.61L12.7073 9.13H12.7273V12.63H10.4973Z"
              fill="#EDEDED"
            />
            <defs>
              <radialGradient
                id="paint0_radial_712_1821"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12.0069 12) rotate(89.9673) scale(12 12)"
              >
                <stop stopColor="#1A1A1A" />
                <stop offset="1" stopColor="#080808" />
              </radialGradient>
            </defs>
          </svg>
          <span className="-mb-1 text-lg text-[#818181]">to start making</span>
          <svg
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="5.5"
              fill="url(#paint0_radial_712_1823)"
              stroke="#818181"
            />
            <path
              d="M11.4927 15.96H12.4627L12.4127 15.15C13.9427 15.03 14.8627 14.16 14.8627 12.86C14.8627 11.84 14.3027 10.89 12.5227 10.89H11.6227C10.6827 10.89 10.3827 10.49 10.3827 9.97C10.3827 9.24 10.9827 8.79 11.9727 8.79C13.0327 8.79 13.5727 9.3 13.6127 10.28H14.7627C14.7027 8.95 13.9527 8 12.4127 7.86L12.4627 7H11.4927L11.5427 7.86C10.0927 8 9.2327 8.83 9.2327 10.01C9.2327 11.1 9.9527 11.9 11.4727 11.9H12.3727C13.4327 11.9 13.7027 12.37 13.7027 12.9C13.7027 13.7 13.0827 14.21 12.0627 14.21C10.9727 14.21 10.3427 13.64 10.2927 12.58H9.1327C9.1827 14.02 10.0127 14.97 11.5427 15.13L11.4927 15.96Z"
              fill="#24FF00"
            />
            <defs>
              <radialGradient
                id="paint0_radial_712_1823"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12.0069 12) rotate(89.9673) scale(12 12)"
              >
                <stop stopColor="#1A1A1A" />
                <stop offset="1" stopColor="#080808" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="relative z-[4] mt-44 aspect-[1920/1342] h-auto w-full">
        <div className="absolute bottom-0 left-0 z-[1] flex h-[40%] w-full flex-col items-center gap-4 bg-gradient-to-t from-black via-black to-transparent pt-[12%]">
          {/* <span className="text-4xl font-medium text-[#ededed]">
            Be the best version of yourself.
          </span>
          <p className="text-center text-xl text-[#818181]">
            Participate in a professional community where individuals are
            dedicated <br />
            to building successful businesses, creating strong brands, and
            increasing revenue.
          </p>
          <svg
            height="30"
            viewBox="0 0 305 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-12"
          >
            <path
              d="M186 9L261 9"
              stroke="url(#paint0_linear_726_5)"
              strokeDasharray="14 4"
            />
            <path
              d="M44 9L119 9"
              stroke="url(#paint1_linear_726_5)"
              strokeDasharray="14 4"
            />
            <path
              d="M155.878 12.0752H148.586C147.192 12.0769 145.856 12.6307 144.871 13.6154C143.885 14.6001 143.329 15.9353 143.326 17.3287V18.0001H161.137V17.3287C161.134 15.9353 160.579 14.6001 159.593 13.6154C158.607 12.6307 157.271 12.0769 155.878 12.0752H155.878Z"
              fill="#818181"
            />
            <path
              d="M156.347 7.1286C156.347 9.41419 154.494 11.267 152.209 11.267C149.923 11.267 148.07 9.41419 148.07 7.1286C148.07 4.84301 149.923 2.99023 152.209 2.99023C154.494 2.99023 156.347 4.84301 156.347 7.1286Z"
              fill="#818181"
            />
            <path
              d="M148.587 10.9694H148.663C148.109 10.4607 147.67 9.83911 147.377 9.14624H142.61C141.214 9.14624 139.875 9.7007 138.888 10.6875C137.901 11.6743 137.345 13.0127 137.345 14.4088V15.0834H142.65C143.108 13.8781 143.92 12.8398 144.98 12.1054C146.04 11.371 147.297 10.9749 148.587 10.9693L148.587 10.9694Z"
              fill="#818181"
            />
            <path
              d="M146.226 8.34703C146.521 8.34682 146.815 8.31524 147.104 8.25272C146.849 7.10062 146.992 5.89611 147.51 4.83576C148.028 3.77519 148.889 2.92129 149.954 2.41306C149.524 1.52036 148.788 0.811602 147.88 0.415524C146.972 0.0194024 145.952 -0.0378225 145.005 0.254234C144.059 0.54629 143.248 1.16836 142.721 2.00723C142.194 2.8461 141.985 3.84606 142.133 4.82563C142.281 5.80524 142.775 6.6994 143.526 7.3456C144.277 7.99181 145.235 8.34703 146.226 8.34703Z"
              fill="#818181"
            />
            <path
              d="M161.855 9.14282H157.033C156.74 9.83547 156.302 10.4573 155.748 10.9658H155.879C157.168 10.9717 158.426 11.3682 159.486 12.103C160.546 12.8381 161.358 13.877 161.816 15.083H167.121V14.4083C167.121 13.0119 166.566 11.6726 165.579 10.6849C164.591 9.69749 163.252 9.14282 161.855 9.14282Z"
              fill="#818181"
            />
            <path
              d="M157.438 7.12829C157.439 7.5064 157.398 7.88322 157.317 8.25245C158.334 8.47244 159.396 8.30098 160.292 7.77239C161.188 7.24381 161.852 6.39686 162.151 5.40054C162.45 4.40443 162.363 3.33176 161.907 2.39691C161.451 1.46205 160.659 0.733596 159.689 0.356563C158.72 -0.020482 157.644 -0.0181491 156.676 0.362921C155.708 0.743991 154.919 1.47585 154.467 2.41281C155.356 2.83903 156.107 3.50794 156.632 4.34215C157.158 5.17657 157.437 6.14219 157.438 7.12837L157.438 7.12829Z"
              fill="#818181"
            />
            <path
              d="M291.493 11.96H292.463L292.413 11.15C293.943 11.03 294.863 10.16 294.863 8.86C294.863 7.84 294.303 6.89 292.523 6.89H291.623C290.683 6.89 290.383 6.49 290.383 5.97C290.383 5.24 290.983 4.79 291.973 4.79C293.033 4.79 293.573 5.3 293.613 6.28H294.763C294.703 4.95 293.953 4 292.413 3.86L292.463 3H291.493L291.543 3.86C290.093 4 289.233 4.83 289.233 6.01C289.233 7.1 289.953 7.9 291.473 7.9H292.373C293.433 7.9 293.703 8.37 293.703 8.9C293.703 9.7 293.083 10.21 292.063 10.21C290.973 10.21 290.343 9.64 290.293 8.58H289.133C289.183 10.02 290.013 10.97 291.543 11.13L291.493 11.96Z"
              fill="#24FF00"
            />
            <path
              d="M12.4927 11.96H13.4627L13.4127 11.15C14.9427 11.03 15.8627 10.16 15.8627 8.86C15.8627 7.84 15.3027 6.89 13.5227 6.89H12.6227C11.6827 6.89 11.3827 6.49 11.3827 5.97C11.3827 5.24 11.9827 4.79 12.9727 4.79C14.0327 4.79 14.5727 5.3 14.6127 6.28H15.7627C15.7027 4.95 14.9527 4 13.4127 3.86L13.4627 3H12.4927L12.5427 3.86C11.0927 4 10.2327 4.83 10.2327 6.01C10.2327 7.1 10.9527 7.9 12.4727 7.9H13.3727C14.4327 7.9 14.7027 8.37 14.7027 8.9C14.7027 9.7 14.0827 10.21 13.0627 10.21C11.9727 10.21 11.3427 9.64 11.2927 8.58H10.1327C10.1827 10.02 11.0127 10.97 12.5427 11.13L12.4927 11.96Z"
              fill="#24FF00"
            />
            <defs>
              <linearGradient
                id="paint0_linear_726_5"
                x1="186"
                y1="9"
                x2="259.819"
                y2="9.83167"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2D2D2D" stopOpacity="0.3" />
                <stop
                  offset="0.505208"
                  stopColor="#545454"
                  stopOpacity="0.494792"
                />
                <stop offset="1" stopColor="#2D2D2D" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_726_5"
                x1="44"
                y1="9"
                x2="117.819"
                y2="9.83167"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2D2D2D" stopOpacity="0.3" />
                <stop
                  offset="0.505208"
                  stopColor="#545454"
                  stopOpacity="0.494792"
                />
                <stop offset="1" stopColor="#2D2D2D" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg> */}
        </div>
        <Image
          src="/static/images/heroNew2.png"
          width={2600}
          height={2600}
          alt="Profit Saloon"
          className="-mt-32 z-0 h-full w-full"
          quality={100}
          priority={true}
        />
      </div>
    </section>
  );
}
