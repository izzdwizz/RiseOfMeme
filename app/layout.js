import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "$FUNGIE",
  description:
    "Join us as we remember the feats of the World record holder – Fungie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <div className="videoDiv">
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
        </div>
        {children}
      </body>
    </html>
  );
}
