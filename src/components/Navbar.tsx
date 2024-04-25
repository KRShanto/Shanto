"use client";

import {
  FaHome,
  FaRegHandshake,
  FaHistory,
  FaInfoCircle,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaPhone } from "react-icons/fa";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import Facebook from "@/../public/facebook.svg";
import Twitter from "@/../public/twitter.svg";
import LinkedIn from "@/../public/linkedin.svg";
import GitHub from "@/../public/github.svg";
import WhatsApp from "@/../public/whatsapp.svg";
import Email from "@/../public/email.svg";
import Image from "next/image";
import Logo from "@/../public/logo.png";
import {
  EMAIL,
  FACEBOOK,
  GITHUB,
  LINKEDIN,
  TWITTER,
  WHATSAPP,
} from "@/lib/consts";

const links = [
  {
    name: "Home",
    href: "#",
    icon: FaHome,
  },
  {
    name: "About",
    href: "#about",
    icon: FaInfoCircle,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: FaRegHandshake,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: GrProjects,
  },
  {
    name: "Services",
    href: "#services",
    icon: MdWork,
  },
  {
    name: "My Story",
    href: "#story",
    icon: FaHistory,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: FaPhone,
  },
];

const socialLinks = [
  {
    image: Facebook,
    alt: "Facebook",
    href: FACEBOOK,
  },
  {
    image: Twitter,
    alt: "Twitter",
    href: TWITTER,
  },

  {
    image: LinkedIn,
    alt: "LinkedIn",
    href: LINKEDIN,
  },
  {
    image: GitHub,
    alt: "GitHub",
    href: GITHUB,
  },
  {
    image: WhatsApp,
    alt: "WhatsApp",
    href: WHATSAPP,
  },
  {
    image: Email,
    alt: "Email",
    href: `mailto:${EMAIL}`,
  },
];

export default function Navbar() {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShouldShow(window.scrollY > 810);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 mt-56 flex items-center justify-between border-b border-slate-700 px-5 py-1 backdrop-blur-lg backdrop-filter",
        { "w-full": shouldShow },
      )}
    >
      {/* Title */}
      <Image
        src={Logo}
        alt="Logo"
        width={50}
        height={50}
        className={cn("relative -left-52 rounded-full opacity-0", {
          "arrive-from-left": shouldShow,
        })}
      />

      {/* Links */}
      <ul className="ml-48 flex gap-5 text-lg text-gray-400">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="flex items-center gap-2 rounded-md border border-transparent p-2 px-3 font-extrabold uppercase transition-all hover:border-slate-800 hover:text-gray-100 active:scale-90"
            >
              <link.icon />
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Social links */}
      <ul
        className={cn("relative -right-52 flex items-center gap-4 opacity-0", {
          "arrive-from-right": shouldShow,
        })}
      >
        {socialLinks.map((link) => (
          <li key={link.alt}>
            <a href={link.href}>
              <Image
                src={link.image}
                alt={link.alt}
                width={30}
                height={30}
                className="transition-all hover:scale-110"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
