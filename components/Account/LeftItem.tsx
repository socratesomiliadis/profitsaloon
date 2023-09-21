import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function LeftItem({
  icon,
  title,
  href,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  href: string;
  desc?: string;
}) {
  const router = useRouter();

  return (
    <Link
      href={href}
      className="flex group flex-row items-center gap-4 w-full py-3 px-3 relative"
    >
      <div
        style={{
          boxShadow: "0px -1px 1px 0px rgba(255, 255, 255, 0.5)",
        }}
        className="icon-wrapper z-[1] w-8 h-8 rounded-md bg-gradient-to-t from-[#242424] to-[#232323]/0 text-white flex items-center justify-center"
      >
        <span className="block relative w-1/2 flex items-center justify-center">
          {icon}
        </span>
      </div>
      <span className="text-lg z-[1] text-white">{title}</span>
      {router.asPath !== href && (
        <div className="absolute inset-0 z-0 bg-[#1d1d1d] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out" />
      )}
      {router.asPath === href && (
        <motion.div
          layoutId="dashboard-ind"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="absolute inset-0 z-0 bg-[#1d1d1d]/60 rounded-lg"
        />
      )}
    </Link>
  );
}
