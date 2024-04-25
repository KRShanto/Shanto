import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default async function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <Navbar />
    </div>
  );
}
