"use client";

import {
  FaHome,
  FaRegHandshake,
  FaHistory,
  FaInfoCircle,
  FaPen,
  FaGlobe,
  FaPhone,
  FaTimes,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { cn } from "@/lib/cn";
import {
  EMAIL,
  FACEBOOK,
  GITHUB,
  LINKEDIN,
  TWITTER,
  WHATSAPP,
} from "@/lib/consts";

import Logo from "@/../public/logo.png";
import Facebook from "@/../public/facebook.svg";
import Twitter from "@/../public/twitter.svg";
import LinkedIn from "@/../public/linkedin.svg";
import GitHub from "@/../public/github.svg";
import WhatsApp from "@/../public/whatsapp.svg";
import Email from "@/../public/email.svg";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/", icon: FaHome },
  { name: "About", href: "/#about", icon: FaInfoCircle },
  { name: "Skills", href: "/#skills", icon: FaRegHandshake },
  { name: "Projects", href: "/#projects", icon: GrProjects },
  { name: "Services", href: "/#services", icon: MdWork },
  { name: "Contact", href: "/#contact", icon: FaPhone },
  {
    name: "Blog",
    href: "https://krshanto.blog",
    icon: FaGlobe,
    external: true,
  },
];

const socialLinks = [
  { image: Facebook, alt: "Facebook", href: FACEBOOK },
  { image: Twitter, alt: "Twitter", href: TWITTER },
  { image: LinkedIn, alt: "LinkedIn", href: LINKEDIN },
  { image: GitHub, alt: "GitHub", href: GITHUB },
  { image: WhatsApp, alt: "WhatsApp", href: WHATSAPP },
  { image: Email, alt: "Email", href: `mailto:${EMAIL}` },
];

export default function ResponsiveNavbarMain() {
  const is950px = useMediaQuery({ maxWidth: 950 });
  const pathname = usePathname();

  if (pathname === "/" && is950px) return <ResponsiveNavbar />;
  if (pathname !== "/") return <ResponsiveNavbar />;

  return <></>;
}

function ResponsiveNavbar() {
  const is950px = useMediaQuery({ maxWidth: 950 });
  const is1600px = useMediaQuery({ maxWidth: 1600 });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!is950px) setMenuOpen(false);
  }, [is950px]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={cn(
          "sticky top-0 z-50 flex w-screen items-center justify-between border-slate-700 px-5 py-3 backdrop-filter",
          menuOpen ? "backdrop-blur-2xl" : "border-b backdrop-blur-lg",
        )}
      >
        {/* Logo */}
        <Image
          src={Logo}
          alt="Logo"
          width={is1600px ? 40 : 50}
          height={is1600px ? 40 : 50}
          className="rounded-full"
        />

        {/* Desktop Menu */}
        {!is950px && (
          <ul
            className={cn("flex gap-5 text-lg text-gray-400", {
              "gap-2": is1600px,
            })}
          >
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 rounded-md border border-transparent p-2 px-3 text-lg font-extrabold uppercase transition-all hover:border-slate-800 hover:text-gray-100 active:scale-90 max-[1600px]:text-sm"
                  target={link.external ? "_blank" : undefined}
                >
                  <link.icon />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Hamburger Menu Icon for Mobile */}
        {is950px && (
          <button onClick={toggleMenu} className="text-lg text-white">
            {menuOpen ? <FaTimes /> : "☰"}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {is950px && menuOpen && (
        <div className="fixed left-0 top-14 z-50 w-full border-b border-slate-600 p-5 backdrop-blur-2xl backdrop-filter">
          <ul className="flex flex-col items-center gap-5 text-lg text-gray-300">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className="flex items-center gap-2 p-2 text-lg font-bold uppercase hover:text-gray-100"
                >
                  <link.icon />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <ul className="mt-5 flex justify-center gap-5">
            {socialLinks.map((link) => (
              <li key={link.alt}>
                <a href={link.href}>
                  <Image
                    src={link.image}
                    alt={link.alt}
                    width={30}
                    height={30}
                    className="hover:scale-110"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
