import { useAuthPopup } from "@/hooks/useAuthPopup";
import { SignIn, SignUp, UserProfile } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

function PopupWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{
        opacity: 0,
        backdropFilter: "blur(0)",
      }}
      animate={{
        opacity: 1,
        backdropFilter: "blur(16px)",
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      }}
      exit={{
        opacity: 0,
        backdropFilter: "blur(0)",
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      }}
      key="test"
      className="fixed w-full h-full inset-0 z-[100] flex items-center justify-center "
    >
      <div className="form-wrapper relative z-10">{children}</div>
      <div
        onClick={() => router.push(router.asPath.split("?")[0])}
        className="cursor-pointer popup-bg z-[1] absolute inset-0 w-full h-full bg-black/10"
      ></div>
    </motion.div>
  );
}

export default function AuthPopup() {
  const { authPopupType, setAuthPopupType } = useAuthPopup();
  const router = useRouter();
  const [paths, setPaths] = useState({
    signIn: `${router.asPath.split("?")[0]}/?auth=signIn`,
    signUp: `${router.asPath.split("?")[0]}/?auth=signUp`,
    afterSuccess: `${router.asPath.split("?")[0]}`,
  });

  useEffect(() => {
    const currentPath = router.asPath.split("?")[0];
    const currentPathNoTrailSlash = currentPath.endsWith("/")
      ? currentPath.slice(0, -1)
      : currentPath;

    if (router.query.auth === "signIn") {
      setPaths({
        signIn: `${currentPathNoTrailSlash}/?auth=signIn`,
        signUp: `${currentPathNoTrailSlash}/?auth=signUp`,
        afterSuccess: `${currentPathNoTrailSlash}`,
      });
      setAuthPopupType("signIn");
    } else setAuthPopupType("none");
  }, [router.query]);

  useEffect(() => {
    const html = document.querySelector("html") as HTMLElement;
    if (authPopupType === "none") html.classList?.remove("overflow-hidden");
    else html.classList?.add("overflow-hidden");
  }, [authPopupType]);

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {authPopupType !== "none" && (
          <PopupWrapper>
            {authPopupType === "signIn" && (
              <div className="h-[60vh] w-[25vw] rounded-xl bg-gradient-to-r from-[#1e1e1e] to-black"></div>
            )}
          </PopupWrapper>
        )}
      </AnimatePresence>
    </>
  );
}
