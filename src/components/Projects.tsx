"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import Check from "@/../public/check.svg";
import BullyBuddy from "@/../public/projects/bully-buddy.png";
import DarkNote from "@/../public/projects/darknote.png";
import KRS from "@/../public/projects/krs.png";
import Meefiil from "@/../public/projects/meefiil.png";
import Minhaz from "@/../public/projects/minhaz.png";
import Musicify from "@/../public/projects/musicify.png";
import OnceIn from "@/../public/projects/oncein.png";
import PassMan from "@/../public/projects/passman.png";
import TicTo from "@/../public/projects/ticto.png";
import EnglishAI from "@/../public/projects/english.png";
import Image from "next/image";
import Github from "@/../public/github.svg";
import Eye from "@/../public/eye.svg";
import Heroes from "@/../public/projects/heroes.png";
import Summer from "@/../public/projects/summer.png";
import Rasel from "@/../public/projects/rasel.png";
import Star from "@/../public/projects/star.png";
import { useMediaQuery } from "react-responsive";

const projects = [
  {
    title: "Bully Buddy",
    description:
      "An AI powered chatbot that behaves like a rude person. It is the opposite of ChatGPT. You can use this for fun",
    link: "https://bully-buddy.vercel.app/",
    github: "https://github.com/KRShanto/Bully-Buddy",
    image: BullyBuddy,
  },
  {
    title: "Star Elevator",
    description:
      "Star Elevator is a leading elevator company in Bangladesh. We provide the best quality elevator at an affordable price.",
    link: "https://starelevatorltd.com/",
    github: null,
    image: Star,
  },
  {
    title: "DarkNote",
    description:
      "A note-taking website organized by folders. It also has rich text editing capabilities.",
    link: "https://darknote.vercel.app/",
    github: "https://github.com/KRShanto/DarkNote",
    image: DarkNote,
  },
  {
    title: "KRS Tech",
    description:
      "My personal blog where I write about tech, programming, and other stuff.",
    link: "https://krshanto.tech",
    github: "https://github.com/KRShanto/KRS-Tech",
    image: KRS,
  },
  {
    title: "Minhaz Rahman",
    description:
      "Blogging website which teaches about tech, finance, business, and other stuff.",
    link: "https://minhazrahman.com",
    github: null,
    image: Minhaz,
  },
  {
    title: "Meefiil's Portfolio",
    description: "Portfolio website for Meefiil, a Video Editor and SEO Expert",
    link: "https://meefiil.vercel.app",
    github: null,
    image: Meefiil,
  },

  {
    title: "Musicify",
    description: "A spotify like music player",
    link: null,
    github: "https://github.com/KRShanto/Musicify",
    image: Musicify,
  },
  {
    title: "PassMan",
    description:
      "A password manager that uses encryption to store your passwords.",
    link: "https://passman2023.vercel.app/",
    github: "https://github.com/KRShanto/PassMan",
    image: PassMan,
  },
  {
    title: "English AI",
    description:
      "An AI that helps you to learn English. It can also correct your grammar.",
    link: "",
    github: "https://github.com/KRShanto/EnglishAI",
    image: EnglishAI,
  },
  {
    title: "TicTo",
    description:
      "A Tic Tac Toe game. It is both single player and multiplayer. You can also play with AI.",
    link: "https://ticto.vercel.app/",
    github: "https://github.com/KRShanto/TicTo",
    image: TicTo,
  },
  {
    title: "Heroes in Pocket",
    description:
      "Ignite your imagination with the Super Hero Toy! Vibrant, detailed, and interactive, this toy brings superheroes to life.",
    link: "https://heroes-in-pocket.web.app",
    github: null,
    image: Heroes,
  },
  {
    title: "Summer",
    description:
      "Discover the wonders of summer through the lens of your camera. Our Photography Contest is open to all photographers, amateur or professional, from all over the world.",
    link: "https://summer-photography-camp.web.app/",
    github: null,
    image: Summer,
  },
];

export default function Projects() {
  const is500px = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <div id="projects">
      <div className="mt-48 flex flex-col items-center max-[1600px]:mt-32">
        <SectionTitle title="Things I've done" image={Check} />

        <div className="mt-8 grid grid-cols-2 gap-8 max-[1600px]:mt-5 max-[950px]:grid-cols-1">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex w-[500px] cursor-default flex-col justify-between rounded-xl border border-slate-700 p-5 max-[1600px]:w-[400px] max-[1600px]:p-3 max-[500px]:w-[300px]"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={`${(index % 2) * 100}`}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={is500px ? 400 : 500}
                  height={is500px ? 200 : 300}
                  className="rounded-t-md"
                />
              ) : (
                <div className="h-52" />
              )}

              <div>
                <div>
                  <h3 className="mt-5 text-2xl font-bold text-gray-300 max-[1600px]:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-400 max-[500px]:text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="flex gap-5">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-2 hover:bg-slate-800"
                      >
                        <Image src={Eye} alt="Eye" width={20} height={20} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-2 hover:bg-slate-800"
                      >
                        <Image
                          src={Github}
                          alt="Github"
                          width={20}
                          height={20}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
