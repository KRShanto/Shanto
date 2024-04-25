import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Navbar />
      <About />
    </div>
  );
}
