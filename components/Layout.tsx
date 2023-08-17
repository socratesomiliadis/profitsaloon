import Header from "@/components/Navigation/Header";
import AuthPopup from "./AuthPopup";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-wrapper bg-white">
      <AuthPopup />
      <Header />
      {children}
    </div>
  );
}
