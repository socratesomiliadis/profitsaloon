import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function NavItem({ text, secId }: { text: string; secId: string }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      id: secId,
      trigger: secId,
      start: "top 50%",
      end: "bottom 50%",
      markers: true,
      onEnter: () => setIsActive(true),
      onEnterBack: () => setIsActive(true),
      onLeave: () => setIsActive(false),
      onLeaveBack: () => setIsActive(false),
    });

    return () => {
      ScrollTrigger.getById(secId)?.kill();
    };
  }, []);

  return (
    <button
      className={`${
        isActive ? "" : "hover:text-white/60"
      } relative rounded-full px-10 py-3 text-lg text-white transition focus-visible:outline-2`}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {isActive && (
        <motion.span
          layoutId="tier-nav-ind"
          className="absolute inset-0 z-10 bg-white mix-blend-difference"
          style={{ borderRadius: 9999 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {text}
    </button>
  );
}

export default function TiersNav() {
  return (
    <nav className="mt-12 sticky left-1/2 -translate-x-1/2 top-8 flex flex-row items-center p-1 border-[#3A3A3A] border-[1px] w-fit rounded-full">
      <NavItem text="Benefits" secId="#benefits" />
      <NavItem text="Meetings" secId="#meetings" />
      <NavItem text="Affiliate" secId="#affiliate" />
      <NavItem text="Buy" secId="#buy" />
    </nav>
  );
}
