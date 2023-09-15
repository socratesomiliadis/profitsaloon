import Header from "@/components/Navigation/Header";
import { useRouter } from "next/router";
import { Layout as VidLayout } from "./Videos/Layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return !router.asPath.includes("/videos") ? (
    <div className="layout-wrapper bg-black">
      {!router.asPath.includes("studio") &&
        !router.asPath.includes("subscribe") &&
        !router.asPath.includes("videos") && <Header />}
      {children}
    </div>
  ) : (
    <VidLayout>{children}</VidLayout>
  );
}
