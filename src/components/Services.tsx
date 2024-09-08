import { IoIosCheckmarkCircle } from "react-icons/io";
import SectionTitle from "./SectionTitle";
import Wrench from "@/../public/wrench.svg";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      name: "Portfolio Website",
      price: [500, 1000],
      description: "A website to showcase your work and attract clients.",
      features: [
        "Customized design",
        "Responsive layout",
        "Fast performance",
        "SEO-ready",
        "Showcase projects & achievements",
        "Easy-to-update",
        "Contact integration",
      ],
      link: "/service/portfolio",
    },
    {
      name: "Blogging Website",
      price: [750, 1500],
      description: "A website to share your thoughts and ideas with the world.",
      features: [
        "Custom blog design",
        "SEO optimized",
        "Content management",
        "Social sharing integration",
        "Email subscription integration",
        "Comments & engagement",
        "Scalable platform",
      ],
      link: "/service/blogging",
    },
    {
      name: "Custom Website",
      price: null,
      description: "A website tailored to your specific needs.",
      features: [
        "Fully tailored design & functionality",
        "Responsive design",
        "Advanced functionality (e-commerce, booking, etc.)",
        "High performance & security",
        "User-centric design",
        "Custom CMS",
        "Ongoing support & maintenance",
      ],
      link: "/service/custom",
    },
  ];

  return (
    <div id="services">
      <div className="mt-48 flex flex-col items-center max-[1600px]:mt-32">
        <SectionTitle title="Services | What I do" image={Wrench} />

        <div className="mt-20 flex w-full items-stretch gap-5 px-8 max-[1600px]:mt-10 max-[950px]:flex-col">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex max-w-[500px] flex-grow basis-[300px] flex-col rounded-lg border border-gray-800 p-5 text-gray-400 max-[1600px]:max-w-[400px] max-[800px]:w-full"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <h2 className="text-3xl font-bold text-white max-[1600px]:text-2xl">
                {service.name}
              </h2>
              <p className="my-5 text-xl max-[1600px]:text-lg">
                {service.description}
              </p>

              {service.price ? (
                <p className="mt-2 text-xl font-bold text-gray-300 max-[1600px]:text-lg">
                  ${service.price[0]} - ${service.price[1]}
                </p>
              ) : (
                <p className="mt-2 text-xl font-bold text-gray-300 max-[1600px]:text-lg">
                  Contact for pricing
                </p>
              )}

              <ul className="mt-2 flex-grow text-xl max-[1600px]:text-lg">
                {service.features.map((feature, index) => (
                  <li key={index} className="mt-2 flex items-center gap-2">
                    <IoIosCheckmarkCircle className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={service.link}
                className="mt-5 rounded-lg bg-blue-900 px-4 py-2 text-center text-xl text-white hover:bg-blue-800 max-[1600px]:text-lg"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
