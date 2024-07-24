// next.js
import Link from "next/link";

// components
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <>
      <div>
        <h2 className="mb-4 font-semibold text-[#EEEEEC]">About</h2>
        <p className="text-balance text-[#b5b3ad] text-[14px] mb-6">
          I&apos;m a full-stack passionate developer with 9 years of experience
          and a store manager at Bonlook. I blend technical expertise with
          management skills to deliver innovative solutions and outstanding
          customer experiences.
        </p>
        <Link
          href="mailto:malik.krechiche@gmail.com"
          className="h-[40px] rounded-md px-4 py-2 text-[14px] font-semibold outline-none transition-colors focus-visible:shadow-focus-ring-button border border-[#1F1F1E]  text-white bg-[#151514] hover:bg-[#151514]/20 focus-visible:shadow-focus-ring-button md:font-medium"
        >
          Let&apos;s talk!
        </Link>
      </div>
      <Stack />
      <Projects />
    </>
  );
}
