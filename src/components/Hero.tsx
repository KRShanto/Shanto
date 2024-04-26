import Image from "next/image";
import ShantoImage from "@/../public/shanto.png";
import CrownIcon from "@/../public/crown.svg";
import { Merriweather, Acme } from "next/font/google";

const acme = Acme({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <div className="relative mt-20 flex items-center gap-10">
      {/* My image */}
      <Image
        src={ShantoImage}
        alt="Shanto"
        width={350}
        height={100}
        className="z-10 rounded-md border border-gray-500"
        data-aos="zoom-in-up"
      />

      <div>
        <h1
          className="name-gradient text-8xl"
          style={acme.style}
          data-aos="fade-up"
        >
          KR Shanto
        </h1>
        <p className="ml-2 text-xl text-slate-400" data-aos="fade-up">
          From Bangladesh 🇧🇩
        </p>

        <div className="mt-20" data-aos="zoom-out">
          <h2 className="flex gap-1 font-merriweather text-4xl">
            The Web <span className="yellow-gradient">Emperor</span>
            <Image src={CrownIcon} alt="Crown" width={30} height={30} />
          </h2>
          <p className="mt-5 text-2xl text-gray-400">
            I build websites and web applications,
            <br />
            with passion and dedication.
          </p>
        </div>

        <div className="mt-14 flex gap-3">
          <a
            href="#contact"
            className="rounded-md border border-slate-700 p-2 px-10 font-bold transition-all hover:border-blue-500 hover:text-blue-500 active:scale-90"
            data-aos="fade-right"
          >
            Hire me
          </a>
          <a
            href="#"
            className="rounded-md border border-slate-700 p-2 px-10 font-bold transition-all hover:border-blue-500 hover:text-blue-500 active:scale-90"
            data-aos="fade-left"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
