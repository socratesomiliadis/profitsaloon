import SideNav from "./Navigation/SideNav";
import TopNav from "./Navigation/TopNav";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background:
          "radial-gradient(61.92% 58.3% at 50% 58.3%, #121212 0%, #000 100%, #000 100%)",
      }}
      className="layout-wrapper bg-black flex flex-row h-screen w-screen overflow-hidden"
    >
      <SideNav />
      <main className="relative w-full flex flex-col overflow-y-auto">
        <TopNav />
        {children}
      </main>
    </div>
  );
}
