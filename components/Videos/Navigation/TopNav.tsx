import AccountDropdown from "@/components/Account/AccountDropdown";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/router";

function AffBtn({ text, link }: { text: string; link: string }) {
  return (
    <Link
      href={link}
      className="p-[1px] overflow-hidden rounded-full bg-gradient-to-b from-[#5c5c5c] to-[#818181]/0"
    >
      <div className="bg-gradient-to-b from-[#121212] via-black to-[#121212] rounded-full overflow-hidden px-12 py-2 flex flex-row items-center whitespace-nowrap gap-3">
        <span className="w-3">
          <svg
            width="100%"
            viewBox="0 0 8 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-1"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 5.13359C0 4.47085 0.537258 3.93359 1.2 3.93359H6.8C7.46274 3.93359 8 4.47085 8 5.13359V9.13359C8 9.79634 7.46274 10.3336 6.8 10.3336H1.2C0.537258 10.3336 0 9.79634 0 9.13359V5.13359ZM1.2 4.73359C0.979086 4.73359 0.8 4.91268 0.8 5.13359H7.2C7.2 4.91268 7.02091 4.73359 6.8 4.73359H1.2ZM7.2 5.93359H0.8V6.33359H2.8C3.02091 6.33359 3.2 6.51268 3.2 6.73359C3.2 6.95451 3.37909 7.13359 3.6 7.13359H4.4C4.62091 7.13359 4.8 6.95451 4.8 6.73359C4.8 6.51268 4.97909 6.33359 5.2 6.33359H7.2V5.93359Z"
              fill="#818181"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.47268 0.575706C5.60286 0.720918 5.60286 0.956353 5.47268 1.10156L4.4929 2.19452C4.16747 2.55755 3.63983 2.55755 3.31439 2.19452L2.33461 1.10156C2.20444 0.956353 2.20444 0.720918 2.33461 0.575706C2.46479 0.430494 2.67584 0.430494 2.80601 0.575706L3.7858 1.66867C3.85088 1.74127 3.95641 1.74127 4.0215 1.66867L5.00128 0.575706C5.13145 0.430494 5.34251 0.430494 5.47268 0.575706Z"
              fill="#818181"
            />
          </svg>
        </span>
        <span className="text-sm text-white">{text}</span>
      </div>
    </Link>
  );
}

export default function TopNav() {
  const router = useRouter();

  return (
    <header className="sticky flex flex-row items-center justify-end z-10 w-full top-0 px-24 py-8">
      <div className="flex select-none flex-row pl-6 pr-32 py-2 items-center gap-3 bg-[#1d1d1d]/50 backdrop-blur-xl rounded-full absolute left-1/2 -translate-x-1/2">
        <span className="w-5 block">
          <svg
            width="100%"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.81533 14.2561C6.41154 14.2629 5.03742 13.8526 3.86705 13.0776C2.69669 12.3025 1.78276 11.1973 1.24122 9.90216C0.699558 8.60709 0.554737 7.18035 0.824988 5.80266C1.09524 4.42497 1.76834 3.15883 2.759 2.16414C3.74976 1.16957 5.01349 0.491565 6.3899 0.215978C7.76631 -0.0594928 9.19366 0.0798526 10.4909 0.616386C11.7881 1.15305 12.8969 2.06258 13.6764 3.23009C14.456 4.39747 14.8715 5.77006 14.8702 7.17379C14.8707 9.04753 14.1283 10.8449 12.806 12.1724C11.4837 13.4998 9.68917 14.2491 7.81533 14.2559V14.2561ZM7.81533 1.45089C6.6825 1.4441 5.57298 1.77389 4.62775 2.39829C3.68235 3.02282 2.94374 3.91392 2.50546 4.95864C2.06707 6.00336 1.9488 7.15464 2.16557 8.26666C2.38233 9.37867 2.92434 10.4013 3.72299 11.2049C4.52152 12.0085 5.54076 12.557 6.65146 12.7808C7.76204 13.0044 8.91418 12.8934 9.96161 12.4617C11.009 12.0299 11.9048 11.297 12.5352 10.3555C13.1655 9.41416 13.5023 8.30681 13.5027 7.1737C13.5058 5.66107 12.9088 4.20905 11.8426 3.13609C10.7763 2.06316 9.328 1.45708 7.81536 1.45077L7.81533 1.45089Z"
              fill="#818181"
            />
            <path
              d="M16.8673 17.1587L12.1465 12.4634L13.1128 11.4971L17.8337 16.1905L16.8673 17.1587Z"
              fill="#818181"
            />
          </svg>
        </span>

        <input
          type="text"
          className="w-full bg-transparent outline-none placeholder:text-[#818181] text-white"
          placeholder="Search"
          //   value={searchValue}
          //   onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="flex flex-row items-center gap-6">
        <SignedIn>
          <AccountDropdown />
        </SignedIn>
        <SignedOut>
          <Link
            href={{
              pathname: "/sign-in",
              query: { redirect_url: router.asPath },
            }}
            className="flex flex-row items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
              className="scale-100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.79795 15.4412C3.97654 15.0426 4.14082 14.6372 4.29022 14.2254M11.5052 16.9211C11.7637 16.2455 11.9929 15.5571 12.1916 14.8572C12.3719 14.2222 12.5269 13.5777 12.6558 12.9247M16.4612 13.6507C16.815 11.8834 17 10.0612 17 8.19899C17 4.2231 13.5224 1 9.23263 1C8.01371 1 6.86037 1.26022 5.83375 1.724M1 11.8205C1.30409 10.6595 1.46525 9.44669 1.46525 8.19899C1.46525 6.63293 2.00479 5.18367 2.92098 4.00217M9.23304 8.19899C9.23304 10.683 8.79867 13.073 7.99647 15.3073C7.79006 15.8822 7.55929 16.4468 7.3053 17M5.06703 11.3486C5.25243 10.3243 5.34894 9.27208 5.34894 8.19899C5.34894 6.21104 7.08772 4.5995 9.23263 4.5995C11.3775 4.5995 13.1163 6.21104 13.1163 8.19899C13.1163 8.75385 13.0976 9.30466 13.0608 9.85092"
                stroke="#818181"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-medium text-white text-sm lg:text-base">
              Log in
            </span>
          </Link>
        </SignedOut>
        <AffBtn link="/affiliate" text="Affiliate Program" />
      </div>
    </header>
  );
}
