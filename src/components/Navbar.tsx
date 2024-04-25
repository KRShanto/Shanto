import {
  FaHome,
  FaRegHandshake,
  FaHistory,
  FaInfoCircle,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaPhone } from "react-icons/fa";

export default function Navbar() {
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
      name: "My Story",
      href: "#story",
      icon: FaHistory,
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
      name: "Contact",
      href: "#contact",
      icon: FaPhone,
    },
    {
      name: "Services",
      href: "#services",
      icon: MdWork,
    },
  ];

  return (
    <nav className="flex justify-between items-center mt-56 border-b pb-2 border-slate-700">
      <ul className="flex gap-14 text-xl text-gray-300">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="flex gap-2 items-center">
              <link.icon />
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
