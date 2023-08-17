import Header from "@/components/Navigation/Header";
// import AuthPopup from "./AuthPopup";
import { AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-wrapper bg-white">
      {/* <AnimatePresence mode="wait">
        <AuthPopup key="authPop" />
      </AnimatePresence> */}
      <Header />
      {children}
    </div>
  );
}
