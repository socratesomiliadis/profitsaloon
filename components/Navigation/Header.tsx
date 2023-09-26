import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/router";
import AccountDropdown from "../Account/AccountDropdown";
import { useHeaderTheme } from "@/hooks/useHeaderTheme";

export default function Header() {
  const { user, signOut } = useClerk();
  const { headerTheme } = useHeaderTheme();
  const router = useRouter();

  return (
    <header className="absolute select-none left-0 z-[99] pt-8 lg:pt-12 top-0 w-screen flex flex-row items-center justify-between px-6 lg:px-32 2xl:px-44">
      <div className="flex flex-row items-center gap-8">
        <Link
          href="/"
          style={{
            color: headerTheme === "dark" ? "#fff" : "#282828",
          }}
          className="relative w-10"
        >
          <svg
            width="100%"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9851 0C6.26136 0 0 6.26092 0 13.9841C0 21.7074 6.26136 27.9683 13.9851 27.9683C21.7089 27.9683 27.9683 21.7074 27.9683 13.9841C27.9683 6.26092 21.7069 0 13.9851 0ZM19.8017 11.9024H16.6264C16.8536 10.7682 16.3292 9.91377 14.7251 9.91377C13.2957 9.91377 12.5441 10.5935 12.5441 11.5178C12.5441 12.215 12.9985 12.6694 14.1502 12.6694H15.1271C17.7606 12.6694 19.1201 13.9259 19.1201 16.0174C19.1201 18.373 17.3586 20.2392 14.0978 20.449L13.9055 21.8084H11.1147L11.5342 20.2567C9.30076 19.6974 8.11413 18.1283 8.25396 15.9125H11.4118C11.2021 17.2913 12.1265 18.1458 13.6258 18.1458C14.9872 18.1458 15.8418 17.4312 15.8418 16.3669C15.8418 15.5649 15.3524 15.0231 14.0628 15.0231H13.0859C10.5748 15.0231 9.2658 13.7511 9.2658 11.8324C9.2658 9.52926 11.1322 7.97763 13.8356 7.64555L14.0628 6.14635H16.8536L16.4166 7.73294C18.6501 8.16988 19.9416 9.63413 19.8017 11.9024Z"
              fill="currentColor"
            />
          </svg>
        </Link>

        <div className="flex flex-row gap-4 mt-[0.15rem]">
          <Link
            href="/videos"
            className="text-[#818181] hover:text-black transition-colors duration-200 tracking-tighter"
          >
            Videos
          </Link>
          <Link
            href="/tiers"
            className="text-[#818181] hover:text-black transition-colors duration-200 tracking-tighter"
          >
            Tiers
          </Link>
        </div>
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
            <span
              style={{
                color: headerTheme === "dark" ? "#fff" : "#282828",
              }}
              className="font-medium text-profitBlack text-sm lg:text-base"
            >
              Log in
            </span>
          </Link>
        </SignedOut>
        <Link
          href="/subscribe"
          className="bg-[#F3F3F3] px-12 py-2 rounded-full text-profitBlack text-base"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
