import Link from "next/link";

export default function Projects() {
  const projectsItems = [
    {
      title: "Optic Genius",
      description:
        "A platform that helps you to find the best eye-care professinals in your city.",
      stack: ["React", "Next.js", "PostgreSQL"],
      href: "https://opticgenius.ca",
    },
  ];
  return (
    <div className="mt-24">
      <h2 className="mb-4 font-semibold">Projects</h2>
      <div className="grid grid-cols-1 gap-4">
        {projectsItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="bg-[#151514] border border-[#262626] rounded-md w-full p-[16px] hover:bg-[#151514]/20"
          >
            <h3 className="mb-4 font-semibold text-sm">{item.title}</h3>
            <p className="mb-2 text-[#8b8b8b] text-xs">{item.description}</p>
            <ul className="flex space-x-2 flex-wrap">
              {item.stack.map((stackItem, index) => (
                <li
                  key={index}
                  className="bg-[#171717] border border-[#262626] rounded-md px-2 py-1.5 text-xs mt-2"
                >
                  {stackItem}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}
