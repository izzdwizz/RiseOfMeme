import Image from "next/image";
import LandingSection from "./LandingSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col wrapper p-4 md:p-8 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* <div className="videoDiv">
        <video
          className="Video"
          src="/video/vid2.mp4"
          loop
          autoPlay
          muted
          playsInline // Important for autoplaying videos on mobile browsers
          type="video/mp4"
        >
          Your video cannot
        </video>
      </div> */}

      <Navbar />
      <LandingSection />

      <Footer />
    </div>
  );
}
