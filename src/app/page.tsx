import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

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
