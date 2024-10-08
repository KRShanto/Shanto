import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import AOSanimate from "../components/AOSanimate";
import StarAnimation from "@/components/StarAnimation";
import Footer from "@/components/Footer";
import TopLoader from "@/components/TopLoader";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "900",
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${merriweather.variable} w-screen overflow-x-hidden`}
      >
        <TopLoader />
        <ResponsiveNavbar />
        <StarAnimation />
        <AOSanimate>{children}</AOSanimate>
        <Footer />
        <GoogleAnalytics gaId="G-LC07X3X15K" />
      </body>
    </html>
  );
}
