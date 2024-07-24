"use client";

// utils
import { cn } from "@/lib/utils";

// components
import DotPattern from "@/components/ui/DotPattern";

// next
import Image from "next/image";
import Link from "next/link";

// icons
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Header() {
  const socials = [
    {
      name: "Github",
      href: "https://github.com/maliksvd",
      icon: SiGithub,
    },
    {
      name: "Linkedin",
      href: "https://ca.linkedin.com/in/malik-krechiche-495192207",
      icon: SiLinkedin,
    },
  ];
  return (
    <>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border-b border-b-[#262626] bg-background p-20 z-0">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
          )}
        />
      </div>
      <div className="-mt-20 flex items-center justify-between space-x-2 mx-auto max-w-2xl px-6 md:px-0 z-50">
        <div className="flex items-center z-50">
          <Image
            src="/profile.jpg"
            alt="Picture of my avatar"
            className="rounded-full  border border-[#212121] grayscale"
            width={120}
            height={120}
          />
          <div className="-mt-10 flex flex-col ml-4">
            <h1 className=" text-xl inline-block font-medium no-underline  text-[#EEEEEC]">
              Malik Krechiche
            </h1>
            <p className="text-xs mt-1.5 leading-none text-[#b5b3ad]">
              Full Stack Developer
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 -mt-4 z-50">
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="cursor-pointer rounded-md p-2 text-[14px] font-semibold outline-none transition-colors focus-visible:shadow-focus-ring-button border border-[#1F1F1E]  text-white bg-[#151514] hover:bg-[#151514]/20 focus-visible:shadow-focus-ring-button md:font-medium"
            >
              <social.icon size={16} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
