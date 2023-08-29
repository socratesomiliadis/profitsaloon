import Header from "@/components/Navigation/Header";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="layout-wrapper bg-black">
      {!router.asPath.includes("studio") &&
        !router.asPath.includes("subscribe") && <Header />}
      {children}
    </div>
  );
}
