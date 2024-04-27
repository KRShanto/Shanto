"use client";

import SectionTitle from "./SectionTitle";
import Fire from "@/../public/fire.svg";
import Figma from "@/../public/figma.svg";
import Nodejs from "@/../public/nodejs.svg";
import Firebase from "@/../public/firebase.svg";
import Github from "@/../public/github.svg";
import ReactImage from "@/../public/react.svg";
import Tailwind from "@/../public/tailwind.svg";
import Javascript from "@/../public/javascript.svg";
import Typescript from "@/../public/typescript.svg";
import Python from "@/../public/python.svg";
import Nextjs from "@/../public/nextjs.svg";
import Mongodb from "@/../public/mongodb.svg";
import Mysql from "@/../public/mysql.svg";
import Postgres from "@/../public/pgsql.svg";
import Sqlite from "@/../public/sqlite.svg";
import Django from "@/../public/django.svg";
import Php from "@/../public/php.svg";
import Laravel from "@/../public/laravel.svg";
import Wordpress from "@/../public/wordpress.svg";
import Rust from "@/../public/rust.svg";
import Aws from "@/../public/aws.svg";
import Html from "@/../public/html.svg";
import Css from "@/../public/css.svg";
import Image from "next/image";
import Prisma from "@/../public/prisma.svg";
import Mongoose from "@/../public/mongoose.svg";
import NextAuth from "@/../public/nextauth.png";
import { useMediaQuery } from "react-responsive";

// Html, Css, Figma, Node.js, Firebase, Github, React, Tailwind, Javascript, Typescript, Python, Next.js, Mongodb, Mysql, Postgres, Sqlite, Django, PHP, Laravel, Wordpress, Rust, AWS, Prisma, Mongoose, NextAuth
const skills = [
  {
    name: "HTML",
    image: Html,
  },
  {
    name: "CSS",
    image: Css,
  },
  {
    name: "Figma",
    image: Figma,
  },
  {
    name: "Node.js",
    image: Nodejs,
  },
  {
    name: "Firebase",
    image: Firebase,
  },
  {
    name: "Github",
    image: Github,
  },
  {
    name: "React",
    image: ReactImage,
  },
  {
    name: "Tailwind",
    image: Tailwind,
  },
  {
    name: "Javascript",
    image: Javascript,
  },
  {
    name: "Typescript",
    image: Typescript,
  },
  {
    name: "Python",
    image: Python,
  },
  {
    name: "Next.js",
    image: Nextjs,
  },
  {
    name: "Mongodb",
    image: Mongodb,
  },
  {
    name: "Mysql",
    image: Mysql,
  },
  {
    name: "Postgres",
    image: Postgres,
  },
  {
    name: "Sqlite",
    image: Sqlite,
  },
  {
    name: "Django",
    image: Django,
  },
  {
    name: "PHP",
    image: Php,
  },
  {
    name: "Laravel",
    image: Laravel,
  },
  {
    name: "Wordpress",
    image: Wordpress,
  },
  {
    name: "Rust",
    image: Rust,
  },
  {
    name: "AWS",
    image: Aws,
  },
  {
    name: "Prisma",
    image: Prisma,
  },
  {
    name: "Mongoose",
    image: Mongoose,
  },
  {
    name: "NextAuth",
    image: NextAuth,
  },
];

export default function Skills() {
  const is1600px = useMediaQuery({ query: "(max-width: 1600px)" });
  const is950px = useMediaQuery({ query: "(max-width: 950px)" });
  const is700px = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <div id="skills">
      <div className="mt-48 flex flex-col items-center max-[1600px]:mt-32 max-[950px]:mt-20">
        <SectionTitle title="My Power/Skills" image={Fire} />

        <div className="mt-14 grid grid-cols-5 gap-14 max-[1600px]:mt-8 max-[1600px]:gap-10 max-[950px]:gap-7 max-[700px]:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={`${(index % (is700px ? 3 : 5)) * 100}`}
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={is950px ? 40 : is1600px ? 50 : 70}
                height={is950px ? 40 : is1600px ? 50 : 70}
              />
              <p className="mt-4 text-lg font-semibold max-[950px]:text-base">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
