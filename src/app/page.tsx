import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KR Shanto - The Web Emperor",
  description:
    "I am KR Shanto, a web developer from Bangladesh. I build websites and web applications with passion and dedication.",
};

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}
