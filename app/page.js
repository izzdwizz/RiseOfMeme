import Image from "next/image";
import LandingSection from "./LandingSection";

export default function Home() {
  return (
    <div className="flex flex-col bg-white items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <LandingSection />
    </div>
  );
}
