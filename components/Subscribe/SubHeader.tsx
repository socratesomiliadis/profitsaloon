import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function NavItem({ text, tier }: { text: string; tier: number }) {
  const router = useRouter();
  const tierQuery = router.query.tier?.toString() ?? "1";
  const currentTier = parseInt(tierQuery);

  return (
    <Link
      href={`/subscribe?tier=${tier}`}
      shallow
      className={`${
        currentTier === tier ? "" : "hover:text-white/60"
      } relative rounded-full px-3 py-1.5 text-sm text-white outline-sky-400 transition focus-visible:outline-2`}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {currentTier === tier && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 bg-white mix-blend-difference"
          style={{ borderRadius: 9999 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {text}
    </Link>
  );
}

export default function SubHeader() {
  return (
    <header className="w-screen fixed z-[100] flex flex-row items-center gap-8 px-16 py-6 bg-gradient-to-b from-black to-transparent">
      <Link href="/" className="w-8">
        <svg
          width="100%"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.0013 0C8.05944 0 0 8.05888 0 18C0 27.9411 8.05944 36 18.0013 36C27.9431 36 36 27.9411 36 18C36 8.05888 27.9406 0 18.0013 0ZM25.4882 15.3204H21.401C21.6935 13.8606 21.0185 12.7607 18.9537 12.7607C17.1138 12.7607 16.1464 13.6356 16.1464 14.8254C16.1464 15.7228 16.7313 16.3077 18.2137 16.3077H19.4711C22.8609 16.3077 24.6108 17.925 24.6108 20.6171C24.6108 23.6492 22.3434 26.0514 18.1462 26.3213L17.8988 28.0711H14.3065L14.8465 26.0739C11.9717 25.354 10.4443 23.3343 10.6243 20.4822H14.689C14.419 22.2569 15.6089 23.3568 17.5388 23.3568C19.2912 23.3568 20.3911 22.4369 20.3911 21.0671C20.3911 20.0347 19.7611 19.3373 18.1012 19.3373H16.8438C13.6116 19.3373 11.9267 17.7 11.9267 15.2304C11.9267 12.2658 14.329 10.2686 17.8088 9.84113L18.1012 7.9114H21.6935L21.131 9.95362C24.0058 10.516 25.6682 12.4008 25.4882 15.3204Z"
            fill="#EDEDED"
          />
        </svg>
      </Link>
      <span className="h-6 w-[1px] bg-[#232323]"></span>
      <nav className="tier-nav flex flex-row items-center gap-4">
        <NavItem text="Student" tier={1} />
        <NavItem text="Scholar" tier={2} />
        <NavItem text="Expert" tier={3} />
      </nav>
    </header>
  );
}
