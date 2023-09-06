import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";

function NavItem({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) {
  const router = useRouter();
  const asPath = router.asPath;

  return (
    <Link
      href={href}
      aria-label={text}
      className={`${
        asPath === href
          ? "text-[#01FF57]"
          : "text-[#818181] hover:text-[#01FF57]"
      } relative w-full h-14 flex flex-row items-center justify-center`}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <span className="w-6 h-6 block">{icon}</span>
      {asPath === href && (
        <motion.span
          layoutId="line"
          className="absolute w-[1px] h-[120%] right-0 z-10 bg-[#01FF57]"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
}

export default function SideNav() {
  return (
    <aside className="h-full w-fit flex flex-col items-center py-16 px-10 relative border-r-[1px] border-[#1D1D1D]">
      <Link href="/" className="w-10 block text-white">
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
      <div className="absolute w-full top-1/2 -translate-y-1/2 flex flex-col gap-4">
        <NavItem
          icon={
            <svg
              width="100%"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 15.25V8.5799C17 7.73304 16.6421 6.92563 16.0146 6.35694L11.0146 1.82569C9.87133 0.789641 8.12867 0.78964 6.98544 1.82569L1.98544 6.35694C1.35793 6.92563 1 7.73304 1 8.5799V15.25C1 16.9069 2.34315 18.25 4 18.25H6C6.55228 18.25 7 17.8023 7 17.25V14.25C7 13.1454 7.89543 12.25 9 12.25C10.1046 12.25 11 13.1454 11 14.25V17.25C11 17.8023 11.4477 18.25 12 18.25H14C15.6569 18.25 17 16.9069 17 15.25Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          }
          text="Home"
          href="/videos"
        />
        <NavItem
          icon={
            <svg
              width="100%"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10.5"
                cy="10.5"
                r="9.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M9.86317 7.18243C9.04947 6.68459 8 7.26438 8 8.21175V13.7883C8 14.7356 9.04947 15.3154 9.86316 14.8176L14.4205 12.0293C15.1932 11.5566 15.1932 10.4434 14.4205 9.97068L9.86317 7.18243Z"
                fill="currentColor"
              />
            </svg>
          }
          text="Live"
          href="/videos/live"
        />
        <NavItem
          icon={
            <svg
              width="100%"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6V10L12.5 12.5M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          text="Watch Later"
          href="/videos/watch-later"
        />
        <NavItem
          icon={
            <svg
              width="100%"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 23C15.7467 23 20 18.7135 20 13.2023C20 7.07539 14.4004 2.72368 12.1011 1.19504C11.5617 0.836392 10.846 0.990445 10.4706 1.50902L7.53791 5.55983C7.10079 6.1636 6.20581 6.23937 5.66682 5.71824C5.18809 5.25536 4.4069 5.25248 3.97747 5.75856C1.99249 8.09781 1 11.0122 1 13.2023C1 18.7135 5.25329 23 10.5 23ZM10.5 23C12.5987 23 14.3 21.1223 14.3 18.8061C14.3 16.2548 12.1934 14.3961 11.1172 13.613C10.7474 13.3439 10.2526 13.3439 9.88283 13.613C8.80662 14.3961 6.7 16.2548 6.7 18.8061C6.7 21.1223 8.40132 23 10.5 23Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          }
          text="Trending"
          href="/videos/trending"
        />
        <NavItem
          icon={
            <svg
              width="100%"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9H2C1.44772 9 1 9.44772 1 10V17C1 17.5523 1.44772 18 2 18H5M5 9V18M5 9L9 1H9.61562C10.843 1 11.7808 2.09535 11.5917 3.3081L11.0161 7H16.0631C17.8811 7 19.2813 8.60405 19.0356 10.4053L18.3538 15.4053C18.1511 16.8918 16.8815 18 15.3813 18H5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          }
          text="Liked"
          href="/videos/liked"
        />
      </div>
    </aside>
  );
}
