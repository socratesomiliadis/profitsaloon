import Header from "@/components/Navigation/Header";
import AuthPopup from "./AuthPopup";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="layout-wrapper bg-white">
      <AuthPopup />
      {!router.asPath.includes("studio") && <Header />}
      {children}
    </div>
  );
}
