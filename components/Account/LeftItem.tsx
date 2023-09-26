import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function LeftItem({
  icon,
  title,
  tab = undefined,
  courseHref,
  colorCode,
}: {
  icon: React.ReactNode;
  title: string;
  tab?: string;
  courseHref?: string;
  colorCode?: string;
}) {
  const router = useRouter();
  const { tab: currTab } = router.query;

  const isActive = !currTab
    ? !!courseHref
      ? false
      : tab === undefined
    : currTab === tab;

  const href = !!tab
    ? { pathname: `/account`, query: { tab } }
    : !!courseHref
    ? courseHref
    : "/account";
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Link
      href={href}
      ref={ref}
      onMouseOver={() => {
        if (ref.current)
          ref.current.style.color = !!colorCode ? colorCode : "#01FF57";
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.color = isActive ? "#01FF57" : "";
      }}
      shallow={true}
      style={{
        color: isActive ? "#01FF57" : "",
      }}
      className={`flex group flex-row items-center gap-4 w-full text-white hover:text-${
        !!colorCode ? `[${colorCode}]` : "profitGreen"
      } transition-colors duration-250 ease-out py-3 px-3 relative`}
    >
      <div
        style={{
          boxShadow: "0px -1px 1px 0px rgba(255, 255, 255, 0.5)",
        }}
        className="icon-wrapper relative z-[1] w-8 h-8 rounded-md bg-gradient-to-t from-[#242424] to-[#232323]/0  flex items-center justify-center"
      >
        <span className="relative w-1/2 flex items-center justify-center">
          {icon}
        </span>
        <span
          style={{
            opacity: isActive ? 0.8 : "",
            color: !!colorCode ? colorCode : "#01FF57",
          }}
          className="absolute text-profitGreen blur-sm opacity-0 group-hover:opacity-80 transition-opacity duration-250 ease-out w-1/2 flex items-center justify-center"
        >
          {icon}
        </span>
      </div>
      <span
        style={{
          color: isActive ? "#fff" : "",
        }}
        className="text-base z-[1] text-white/60 group-hover:text-white"
      >
        {title}
      </span>
      {!isActive && (
        <div className="absolute inset-0 z-0 bg-[#1d1d1d] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out" />
      )}
      {isActive && (
        <motion.div
          layoutId="dashboard-ind"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="absolute inset-0 z-0 bg-[#1d1d1d]/60 rounded-lg"
        />
      )}
    </Link>
  );
}
