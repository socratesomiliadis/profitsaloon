import Header from "@/components/Navigation/Header";
import AuthPopup from "./AuthPopup";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="layout-wrapper bg-black">
      <AuthPopup />
      {!router.asPath.includes("studio") &&
        !router.asPath.includes("subscribe") && <Header />}
      {children}
    </div>
  );
}
