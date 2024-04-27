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
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

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
    name: "Story",
    href: "/story",
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

  const is1600px = useMediaQuery({ maxWidth: 1600 });
  const is1250px = useMediaQuery({ maxWidth: 1250 });
  const is1150px = useMediaQuery({ maxWidth: 1150 });
  const is950px = useMediaQuery({ maxWidth: 950 });

  useEffect(() => {
    const handleScroll = () => {
      if (is1600px) {
        setShouldShow(window.scrollY > 600);
      } else {
        setShouldShow(window.scrollY > 810);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [is1600px]);

  // after 950px, we'll use MobileNavbar
  if (is950px) return null;

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 mt-56 flex w-screen items-center justify-between border-slate-700 px-5 py-1 backdrop-blur-lg backdrop-filter max-[1600px]:mt-16",
          { "w-full": shouldShow, "border-b": shouldShow },
        )}
      >
        {/* Title */}
        <Image
          src={Logo}
          alt="Logo"
          width={is1600px ? 40 : 50}
          height={is1600px ? 40 : 50}
          className={cn("relative -left-52 rounded-full opacity-0", {
            "arrive-from-left": shouldShow,
          })}
        />

        {/* Links */}
        <ul
          className={cn(
            "absolute left-1/2 flex translate-x-[-50%] gap-5 text-lg text-gray-400 max-[1600px]:gap-2",
            // move it to left
            shouldShow && is1600px && "left-[600px]",
            shouldShow && is1250px && "left-[500px]",
            shouldShow && is1150px && "left-1/2",
          )}
        >
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="flex items-center gap-2 rounded-md border border-transparent p-2 px-3 text-lg font-extrabold uppercase transition-all hover:border-slate-800 hover:text-gray-100 active:scale-90 max-[1600px]:text-sm"
              >
                <link.icon />
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Social links */}
        {!is1150px && (
          <ul
            className={cn(
              "relative -right-64 flex items-center gap-4 opacity-0",
              {
                "arrive-from-right": shouldShow,
              },
            )}
          >
            {socialLinks.map((link) => (
              <li key={link.alt}>
                <a href={link.href}>
                  <Image
                    src={link.image}
                    alt={link.alt}
                    width={is1600px ? 25 : 30}
                    height={is1600px ? 25 : 30}
                    className="transition-all hover:scale-110"
                  />
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <div
        className={cn("h-[1px] w-[900px] bg-slate-700", {
          "w-screen": shouldShow,
        })}
      ></div>
    </>
  );
}
