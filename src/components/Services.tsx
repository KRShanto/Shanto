"use client";

import SectionTitle from "./SectionTitle";
import Wrench from "@/../public/wrench.svg";
import Frontend from "@/../public/animations/frontend.json";
import Backend from "@/../public/animations/backend.json";
import Database from "@/../public/animations/database.json";
import Authentication from "@/../public/animations/authentication.json";
import Designer from "@/../public/animations/designer.json";
import Cms from "@/../public/animations/cms.json";
import Website from "@/../public/animations/website.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { useMediaQuery } from "react-responsive";

const services = [
  {
    title: "Custom Web Development",
    description:
      "From simple landing pages to complex web applications, I can design and develop bespoke solutions tailored to your specific needs using technologies like React, Next.js, and Express.js.",
    animation: Website,
  },
  {
    title: "Front-end Development",
    description:
      "Need a stunning user interface that captivates your audience? I specialize in crafting responsive and visually appealing front-end designs using HTML, CSS, and JavaScript frameworks like React.",
    animation: Frontend,
  },
  {
    title: "Back-end Development",
    description:
      "Looking for robust server-side solutions to power your web applications? I have expertise in building secure and scalable back-end systems using PHP, Laravel, Express.js, and Node.js.",
    animation: Backend,
  },
  {
    title: "Database Management",
    description:
      "Whether it's setting up a MongoDB cluster for flexible NoSQL data storage or optimizing MySQL databases for efficient querying, I can help you manage your data effectively to ensure optimal performance and reliability.",
    animation: Database,
  },
  {
    title: "Authentication & Authorization",
    description:
      "Protect your users' data and secure access to your applications with custom authentication solutions. I specialize in implementing secure authentication mechanisms using NextAuth for Next.js applications.",
    animation: Authentication,
  },
  {
    title: "UI/UX Design",
    description:
      "Elevate your online presence with intuitive and visually stunning user interfaces. I offer UI/UX design services using tools like Figma, ensuring seamless navigation and an enjoyable user experience across all devices.",
    animation: Designer,
  },
  {
    title: "Content Management Systems",
    description:
      "Need a WordPress website or a custom CMS solution? I can help you build and customize WordPress themes, plugins, and extensions to meet your content management needs.",
    animation: Cms,
  },
];

export default function Services() {
  const is700px = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <div id="services">
      <div className="mt-48 flex flex-col items-center max-[1600px]:mt-32">
        <SectionTitle title="Services | What I do" image={Wrench} />

        <div className="mt-12 flex flex-col items-center space-y-12 max-[1600px]:mt-5 max-[1600px]:space-y-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-5 rounded-2xl border border-slate-700 p-5 max-[1600px]:gap-3 max-[1600px]:p-3 max-[700px]:flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-300 max-[1600px]:text-2xl max-[950px]:text-xl">
                  {service.title}
                </h3>
                {is700px && (
                  <Lottie
                    animationData={service.animation}
                    className="mx-auto h-40 w-40"
                  />
                )}
                <p className="mt-5 w-[550px] text-xl leading-8 text-gray-400 max-[950px]:w-[450px] max-[950px]:text-base max-[700px]:w-[280px] max-[700px]:leading-9">
                  {service.description}
                </p>
              </div>
              {!is700px && (
                <Lottie
                  animationData={service.animation}
                  className="h-56 w-56 max-[950px]:h-32 max-[950px]:w-32"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
