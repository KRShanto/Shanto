import { FaArrowRight, FaCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PricingPlan {
  name: string;
  price: number | null;
  features: string[];
  isPopular: boolean;
}

// TODO: improve metadata
export const metadata = {
  title: "Create Professional Portfolio Website that Shines",
  description:
    "Create a professional portfolio website that showcases your work and attracts clients.",
};

const pricing: PricingPlan[] = [
  {
    name: "Basic",
    price: 500,
    features: [
      "Custom design",
      "Responsive layout",
      "Up to 5 pages",
      "Basic SEO optimization",
      "1 month of support",
    ],
    isPopular: false,
  },
  {
    name: "Pro",
    price: 1000,
    features: [
      "Everything in Basic",
      "Up to 10 pages",
      "Advanced SEO optimization",
      "Content Management System",
      "3 months of support",
      "Social media integration",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: null,
    features: [
      "Everything in Pro",
      "Unlimited pages",
      "E-commerce functionality",
      "Custom features",
      "1 year of support",
      "Performance optimization",
    ],
    isPopular: false,
  },
];

export default function Page() {
  return (
    <main className="container mx-auto min-h-screen px-32 text-gray-100 max-[1600px]:px-0">
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
            data-aos="fade-down"
          >
            Create Professional{" "}
            <span className="green-gradient-text inline">Portfolio</span> that{" "}
            <span className="blue-gradient-text inline">Shines</span>
          </h1>
          <p
            className="mx-auto mt-3 max-w-md text-base text-gray-300 sm:text-lg md:mt-5 md:max-w-3xl md:text-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Showcase your work with a stunning online presence that sets you
            apart from the competition.
          </p>
          <div
            className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link
              href="/website?service=portfolio"
              className="rounded-full bg-blue-600 px-6 py-3 text-lg font-bold text-white hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className="p-8">
        <section className="mb-12" data-aos="fade-up">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl md:text-4xl">
            Why Build a Portfolio?
          </h2>
          <p className="mb-4 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 md:text-xl md:leading-10">
            In today's digital age, having a strong online presence is crucial
            for professionals across all industries. A portfolio website serves
            as your digital business card, showcasing your skills, projects, and
            achievements to potential clients or employers. It's an investment
            in your personal brand that can open doors to new opportunities and
            help you stand out in a competitive market.
          </p>
        </section>

        <section className="mb-20" data-aos="fade-up">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl md:text-4xl">
            How I Can Help
          </h2>
          <p className="mb-4 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 md:text-xl md:leading-10">
            As a seasoned web developer, I specialize in creating stunning,
            responsive portfolio websites tailored to your unique needs. My
            services include:
          </p>
          <ul className="mb-4 flex list-inside list-disc flex-col gap-3 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 md:text-xl md:leading-10">
            <li>Custom design that reflects your personal brand</li>
            <li>Responsive layout for seamless viewing on all devices</li>
            <li>Integration of your projects, skills, and achievements</li>
            <li>SEO optimization to improve your online visibility</li>
            <li>Easy-to-use content management system for updates</li>
          </ul>
        </section>

        <section className="mb-12" data-aos="fade-up">
          <h2 className="mb-4 text-center text-2xl font-semibold md:text-4xl">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col rounded-lg bg-gray-800 p-6 ${plan.isPopular ? "border-2 border-blue-500" : ""}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {plan.isPopular && (
                  <span className="absolute right-5 rounded-full bg-blue-500 px-2 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="mb-2 text-xl font-semibold">{plan.name}</h3>
                <p className="mb-4 text-3xl font-bold">
                  {plan.price ? `$${plan.price}` : "Contact for pricing"}
                </p>
                <ul className="mb-4 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-2 flex items-center">
                      <FaCheck className="mr-2 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  className="rounded-full bg-blue-600 px-4 py-2 text-center text-lg font-bold text-white hover:bg-blue-700"
                  href={`/website?service=portfolio&price=${!plan.price ? 2500 : plan.price}`}
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center" data-aos="fade-up">
          <Link
            href="/website?service=portfolio"
            className="inline-flex items-center rounded bg-blue-600 px-10 py-3 text-lg font-bold text-white hover:bg-blue-700"
          >
            Get Started
            <FaArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
