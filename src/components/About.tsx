"use client";

import Image from "next/image";
import Search from "@/../public/search.svg";
import SectionTitle from "./SectionTitle";
import { useMediaQuery } from "react-responsive";
import Shanto2 from "@/../public/shanto2.png";

export default function About() {
  return (
    <div id="about">
      <div className="mt-48 flex flex-col items-center max-[1600px]:mt-32 max-[950px]:mt-20">
        <SectionTitle title="Who am I?" image={Search} />

        {/* on the left, description, on the right image */}
        <div className="flex items-center gap-5">
          <div className="max-w-[700px] p-5 text-gray-400 max-[800px]:w-full">
            <p
              className="mt-8 text-xl leading-9 max-[1600px]:text-lg max-[800px]:mt-4 max-[800px]:text-base"
              data-aos="fade-right"
            >
              I am a full-stack developer. I am passionate about building
              excellent software that improves the lives of those around me. I
              specialize in creating software for clients ranging from
              individuals and small-businesses all the way to large enterprise
              corporations.
            </p>

            <p
              className="mt-8 text-xl leading-9 max-[1600px]:text-lg max-[800px]:text-base"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              I specialize in building portfolio websites and blogging websites.
              I help freelancers and other professionals to create their online
              presence. Whether they already have a website or not, I help them
              to create a website that represents them and their work. I also
              help them to create a blog where they can share their thoughts and
              experiences.
            </p>

            <p
              className="mt-8 text-xl leading-9 max-[1600px]:text-lg max-[800px]:text-base"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              I also love to share my knowledge with others. I write articles on
              my blogging website where I share my knowledge and experience with
              others. I share about web development, freelancing, business, and
              other topics that I am passionate about.
            </p>
          </div>
          <div className="max-[1600px]:hidden " data-aos="zoom-in">
            <Image src={Shanto2} alt="Shanto" className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
