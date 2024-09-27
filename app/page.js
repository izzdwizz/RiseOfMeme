import Image from "next/image";
import LandingSection from "./LandingSection";
import Navbar from "./components/Navbar";
import MemeSection from "./MemeSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col wrapper p-8 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <LandingSection />
      <MemeSection />
      <Footer />
    </div>
  );
}
