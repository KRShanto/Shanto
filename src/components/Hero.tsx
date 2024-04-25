import Image from "next/image";
import React from "react";
import ShantoImage from "@/../public/shanto.png";
import CrownIcon from "@/../public/crown.svg";
import { Merriweather, Acme } from "next/font/google";

const merriweather = Merriweather({ subsets: ["latin"], weight: "900" });
const acme = Acme({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <div className="flex mt-20 items-center gap-10">
      {/* My image */}
      <Image
        src={ShantoImage}
        alt="Shanto"
        width={350}
        height={100}
        className="rounded-md border border-gray-500"
      />

      <div className="">
        <h1 className="name-gradient text-8xl" style={acme.style}>
          KR Shanto
        </h1>
        <div className="mt-20">
          <h2 className="flex gap-1 text-4xl " style={merriweather.style}>
            The Web <span className="yellow-gradient">Emperor</span>
            <Image src={CrownIcon} alt="Crown" width={30} height={30} />
          </h2>
          <p className="text-2xl mt-5 text-gray-300">
            I build websites and web applications,
            <br />
            with passion and dedication.
          </p>
        </div>
      </div>
    </div>
  );
}
