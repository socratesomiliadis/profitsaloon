import Header from "@/components/Navigation/Header";
import { useRouter } from "next/router";
import { Layout as VidLayout } from "./Videos/Layout";
import AccLayout from "./Account/AccLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  if (router.asPath.includes("/videos") && !router.asPath.includes("/account"))
    return <VidLayout>{children}</VidLayout>;

  if (router.asPath.includes("/account")) return children;

  return (
    <div className="layout-wrapper bg-black">
      {!router.asPath.includes("studio") &&
        !router.asPath.includes("subscribe") &&
        !router.asPath.includes("videos") && <Header />}
      {children}
    </div>
  );
}
