import Image from "next/image";
import Search from "@/../public/search.svg";
import SectionTitle from "./SectionTitle";
import Door from "@/../public/door.svg";
import Emoji from "@/../public/emoji.svg";
import Flowers from "@/../public/flowers.svg";
import Painting from "@/../public/painting.svg";
import Wordpress from "@/../public/wordpress.svg";

// TODO: improve the content
const about = [
  {
    title: "Front-End Developer",
    description: (
      <p>
        As a Front-End Developer, I specialize in crafting engaging user
        interfaces and seamless user experiences. My proficiency in <b>HTML</b>,{" "}
        <b>CSS</b>, <b>JavaScript</b> and <b>React</b> allows me to transform
        design mockups into interactive web pages with pixel-perfect precision.
        Whether it&apos;s building responsive layouts, implementing animations,
        or optimizing performance, I leverage the latest front-end techniques
        and best practices to ensure optimal usability and accessibility across
        devices and browsers.
      </p>
    ),
    image: Painting,
  },
  {
    title: "Back-End Developer",
    description: (
      <p>
        In the realm of Back-End Development, I specialize in architecting and
        implementing server-side solutions to support complex web applications.
        With expertise in <b>PHP</b>, <b>Laravel</b>, <b>Express.js</b>, and{" "}
        <b>Node.js</b>, I design and develop secure, efficient, and scalable
        back-end systems tailored to meet specific project requirements. From
        designing RESTful APIs and handling database operations to implementing
        authentication mechanisms and optimizing server performance, I ensure
        the seamless integration of front-end and back-end components for a
        cohesive user experience.
      </p>
    ),
    image: Door,
  },
  {
    title: "Full-Stack Developer",
    description: (
      <p>
        As you might have guessed, I am a Full-Stack Developer. You already know
        what that means right? So no more talking about it.
      </p>
    ),
    image: Emoji,
  },
  {
    title: "WordPress Developer",
    description: (
      <p>
        As a WordPress Developer, I specialize in creating custom themes and
        plugins that extend the functionality of WordPress websites. My
        proficiency in <b>PHP</b>, <b>HTML</b>, <b>CSS</b>, and{" "}
        <b>JavaScript</b> allows me to develop bespoke solutions that cater to
        specific client requirements. Whether it&apos;s building responsive
        themes, implementing custom post types, or optimizing site performance,
        I leverage the flexibility and scalability of WordPress to deliver
        high-quality websites that are easy to manage and maintain. By adhering
        to WordPress coding standards and best practices, I ensure that the
        final product is secure, stable, and user-friendly.
      </p>
    ),
    image: Wordpress,
  },
];

export default function About() {
  return (
    <div id="about">
      <div className="mt-48 flex flex-col items-center">
        <SectionTitle title="Who am I?" image={Search} />

        {/* Use 3d card hover effects */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {about.map((item, index) => (
            <div
              key={index}
              className="w-[450px] rounded-lg border border-gray-700  p-6"
            >
              <div className="flex items-center gap-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                />
                <h3 className="text-2xl font-semibold text-slate-300">
                  {item.title}
                </h3>
              </div>
              <div className="mt-4 leading-8 text-gray-400">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
