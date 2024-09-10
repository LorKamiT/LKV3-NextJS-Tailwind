"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import Image from "next/image";

import ThemeSwitch from "./ThemeSwitch";
import { usePathname } from "next/navigation";

import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import LKLogo from "../../public/LogoLK.png";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex w-full h-[4rem] fixed justify-center border-b-2 border-dashed border-slate-800 p-2">
      <div className=" flex flex-row items-center w-[90%] sticky">
        <div className="Logo flex w-[10%] justify-center h-full">
          <Image
            src={LKLogo}
            alt="LkLogo"
            width={70}
            height={70}
            className=" object-contain"
          />
        </div>
        <div className="flex w-[90%] md:w-full h-full justify-around items-center uppercase font-pixel">
          {siteConfig.navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`
              ${pathname === link.href ? " text-sky-500 dark:text-sky-300" : ""}
            `}
            >
              <p>{link.label}</p>
            </Link>
          ))}
        </div>
        <div className="Iconos hidden sm:flex flex-row gap-4 h-full w-[20%] justify-center items-center text-xl">
          <Link
            aria-label="Discord"
            href={siteConfig.links.discord}
            target="_blank"
          >
            <FaDiscord className="hover:text-sky-500 hover:scale-110 transition-all" />
          </Link>
          <Link aria-label="X" href={siteConfig.links.twitter} target="_blank">
            <FaXTwitter className="hover:text-sky-500 hover:scale-110 transition-all" />
          </Link>
          <Link
            aria-label="Github"
            href={siteConfig.links.github}
            target="_blank"
          >
            <FaGithub className="hover:text-sky-500 hover:scale-110 transition-all" />
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
