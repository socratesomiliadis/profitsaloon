import FooterLinkColumn from "./FooterLinkColumn";
import Link from "next/link";
import MailchimpForm from "./MailchimpForm";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Footer() {
  const cardRef = useRef<HTMLVideoElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;
    root.style.setProperty(
      "--service-card-width",
      `${cardRef.current?.offsetWidth}px`
    );
    const card = cardRef.current;
    const hoverTarget = hoverRef.current as HTMLDivElement;

    function handleMouseEnter() {
      card!.style.transition = "transform 0.25s ease 0s";
    }

    function handleMouseOut() {
      card!.style.transition = "transform 0.4s ease 0s";
      // card!.style.transform = "rotateY(0deg) rotateX(0deg)";
      gsap.to(card, {
        duration: 0.1,
        rotateY: 0,
        rotateX: 0,
        ease: "none",
      });
    }

    function handleMouseOver(e: MouseEvent) {
      card!.style.transition = "";
      let x = e.clientX - hoverTarget?.offsetWidth / 2;
      let y = e.clientY - hoverTarget?.offsetHeight / 2;
      let normalizedX = (1 * 15 * x) / hoverTarget?.offsetWidth;
      let normalizedY = (1 * (8 * y)) / hoverTarget?.offsetHeight;
      gsap.to(card, {
        duration: 0.1,
        rotateY: -normalizedX,
        rotateX: normalizedY,
        ease: "power2.inOut",
      });
      // card!.style.transform = `rotateY(${-normalizedX}deg) rotateX(${normalizedY}deg)`;
    }

    document.addEventListener("mousemove", (e) => handleMouseOver(e));

    return () => {
      document.removeEventListener("mousemove", (e) => handleMouseOver(e));
    };
  }, []);

  return (
    <footer className="w-full relative min-h-[80vh] py-8 lg:py-32 bg-black flex flex-col items-center">
      <div
        ref={hoverRef}
        className="relative video-wrapper w-full flex items-center justify-center overflow-visible z-[1]"
      >
        <div className="z-[2] absolute w-full h-2/3 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"></div>
        <video
          ref={cardRef}
          src="/static/videos/ProfitSaloonFooter.mp4"
          className="w-[105%] max-w-none -mb-[5%] -ml-[3%] z-[1] footer-vid"
          loop
          autoPlay
          muted
          playsInline
        />
      </div>
      <div className="w-full relative z-[2] bg-black flex flex-col gap-16 md:gap-64 border-t-[1px] border-[#1a1a1a] justify-between pt-24 px-6 lg:px-16 xl:px-[6vw] 2xl:px-[8vw]">
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
