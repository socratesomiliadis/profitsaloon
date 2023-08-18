import Footer from "@/components/Footer/Footer";
import FeaturedCourses from "@/components/Home/FeaturedCourses";
import HeroMasked from "@/components/Home/HeroMasked";
import MainSection from "@/components/Home/HeroSection";
import TierSection from "@/components/Home/TierSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white selection:bg-profitGreen selection:text-profitBlack h-screen">
      <HeroMasked />
      <MainSection />
      <TierSection />
      <FeaturedCourses />
      <Footer />
    </main>
  );
}
