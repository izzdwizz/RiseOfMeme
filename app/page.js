import Image from "next/image";
import LandingSection from "./LandingSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MemeSection from "./MemeSection";
import About from "./About";

export default function Home() {
  return (
    <div className="flex flex-col wrapper  items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <LandingSection />
      <About />
      <MemeSection />

      <Footer />
    </div>
  );
}
