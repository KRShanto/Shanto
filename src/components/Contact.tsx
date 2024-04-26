import {
  EMAIL,
  FACEBOOK,
  GITHUB,
  LINKEDIN,
  PHONE,
  TWITTER,
  WHATSAPP,
} from "@/lib/consts";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import Phone from "@/../public/phone.svg";

export default function Contact() {
  return (
    <div id="contact">
      <div className="mt-48 flex flex-col items-center">
        <SectionTitle title="Contact Me" image={Phone} />

        <div className="mt-10 flex gap-44">
          {/* Left side */}
          <div className="flex flex-col gap-5">
            {/* Email button */}
            <button
              className="flex flex-col items-start rounded-full border border-slate-700 p-2 px-5 transition-all hover:border-slate-400 active:scale-95"
              data-aos="fade-right"
            >
              <div className="flex items-center gap-2">
                <MdEmail className="text-3xl" />
                <span className="text-2xl">Email Me</span>
              </div>
              <p>{EMAIL}</p>
            </button>

            {/* WhatsApp button */}
            <button
              className="flex flex-col items-start rounded-full border border-slate-700 p-2 px-5 transition-all hover:border-slate-400 active:scale-95"
              data-aos="fade-right"
            >
              <div className="flex items-center gap-2">
                <BsWhatsapp className="text-3xl" />
                <span className="text-2xl">WhatsApp</span>
              </div>
              <p>{PHONE}</p>
            </button>

            {/* Website button */}
            <Link
              href="/website"
              className="relative flex items-center gap-2 overflow-hidden rounded-full p-2 px-5 transition-all active:scale-95"
              data-aos="fade-right"
            >
              <div className="absolute inset-0 z-0">
                <div className="h-full w-full bg-gradient-to-r from-blue-500 to-green-500"></div>
              </div>
              <BiWorld className="z-10 text-3xl" />
              <p className="z-10 text-xl">
                Connect me by providing website details
              </p>
            </Link>
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-5">
            {/* Facebook button */}
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-700 p-2 px-5 transition-all hover:border-blue-500 hover:text-blue-500 active:scale-95"
              data-aos="fade-left"
            >
              <FaFacebook className="text-3xl" />
              <p className="text-xl">Connect through Facebook</p>
            </a>

            {/* LinkedIn button */}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-700 p-2 px-5 hover:border-blue-600 hover:text-blue-600 active:scale-95"
              data-aos="fade-left"
            >
              <FaLinkedin className="text-3xl" />
              <p className="text-xl">Connect through LinkedIn</p>
            </a>

            {/* Twitter button */}
            <a
              href={TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-700 p-2 px-5 hover:border-blue-400 hover:text-blue-400 active:scale-95"
              data-aos="fade-left"
            >
              <FaTwitter className="text-3xl" />
              <p className="text-xl">Connect through Twitter</p>
            </a>

            {/* GitHub button */}
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-700 p-2 px-5 hover:border-slate-200 active:scale-95"
              data-aos="fade-left"
            >
              <FaGithub className="text-3xl" />
              <p className="text-xl">View my github</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
