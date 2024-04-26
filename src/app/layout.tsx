import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import AOSanimate from "../components/AOSanimate";
import StarAnimation from "@/components/StarAnimation";
import Footer from "@/components/Footer";

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
      <body className={`${inter.className} ${merriweather.variable}`}>
        <StarAnimation />
        <AOSanimate>{children}</AOSanimate>
        <Footer />
      </body>
    </html>
  );
}
