"use client";

import Image from "next/image";
import ShantoImage from "@/../public/shanto.png";
import CrownIcon from "@/../public/crown.svg";
import { Merriweather, Acme } from "next/font/google";
import { useMediaQuery } from "react-responsive";

const acme = Acme({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  const is1600px = useMediaQuery({ query: "(max-width: 1600px)" });
  const is500px = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <div className="relative mt-20 flex items-center gap-10 max-[700px]:flex-col">
      {/* My image */}
      <Image
        src={ShantoImage}
        alt="Shanto"
        width={is500px ? 200 : is1600px ? 250 : 350}
        height={100}
        className="z-10 rounded-md border border-gray-500"
        data-aos="zoom-in-up"
      />

      <div>
        <h1
          className="name-gradient text-8xl max-[1600px]:text-6xl max-[700px]:text-center max-[500px]:text-5xl"
          style={acme.style}
          data-aos="fade-up"
        >
          KR Shanto
        </h1>
        <p
          className="ml-2 text-xl text-slate-400 max-[1600px]:text-base max-[700px]:text-center"
          data-aos="fade-up"
        >
          From Bangladesh 🇧🇩
        </p>

        <div
          className="mt-20 flex flex-col max-[1600px]:mt-10 max-[700px]:items-center"
          data-aos="zoom-out"
        >
          <h2 className="flex gap-1 font-merriweather text-4xl max-[1600px]:text-2xl max-[700px]:text-3xl max-[500px]:text-2xl">
            The Web <span className="yellow-gradient">Emperor</span>
            <Image
              src={CrownIcon}
              alt="Crown"
              width={is1600px ? 20 : 30}
              height={30}
            />
          </h2>
          <p className="mt-5 text-2xl text-gray-400 max-[1600px]:text-lg max-[700px]:text-center max-[500px]:text-base">
            I build websites and web applications,
            <br />
            with passion and dedication.
          </p>
        </div>

        <div className="mt-14 flex gap-3 max-[1600px]:mt-10 max-[700px]:justify-center max-[500px]:mt-8">
          <a
            href="#contact"
            className="rounded-md border border-slate-700 p-2 px-10 font-bold transition-all hover:border-blue-500 hover:text-blue-500 active:scale-90 max-[1600px]:text-sm "
            data-aos="fade-right"
          >
            Hire me
          </a>
          <a
            href="#"
            className="rounded-md border border-slate-700 p-2 px-10 font-bold transition-all hover:border-blue-500 hover:text-blue-500 active:scale-90 max-[1600px]:text-sm"
            data-aos="fade-left"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
