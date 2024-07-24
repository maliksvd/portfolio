import {
  SiDocker,
  SiExpo,
  SiFigma,
  SiFramer,
  SiGraphql,
  SiJavascript,
  SiNextdotjs,
  SiNuxtdotjs,
  SiReact,
  SiSupabase,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiVuedotjs,
  SiNodedotjs,
  SiPostgresql,
  SiAwsamplify,
  SiGooglecloud,
  SiNetlify,
  SiVercel,
  SiGithub,
  SiJira,
  SiShopify,
} from "react-icons/si";

export default function Stack() {
  const stackItems = [
    {
      title: "Frontend",
      items: [
        {
          name: "React",
          icon: SiReact,
        },
        {
          name: "Next.js",
          icon: SiNextdotjs,
        },
        {
          name: "Nuxt 3",
          icon: SiNuxtdotjs,
        },
        {
          name: "Vue 3",
          icon: SiVuedotjs,
        },
        {
          name: "Javascript",
          icon: SiJavascript,
        },
        {
          name: "TypeScript",
          icon: SiTypescript,
        },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Supabase", icon: SiSupabase },
        { name: "GraphQL", icon: SiGraphql },
        { name: "REST API" },
      ],
    },
    {
      title: "DevOps",
      items: [
        { name: "Docker", icon: SiDocker },
        { name: "AWS", icon: SiAwsamplify },
        { name: "Google Cloud", icon: SiGooglecloud },
        { name: "Vercel", icon: SiVercel },
        { name: "CI/CD", icon: SiGithub },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Figma", icon: SiFigma },
        { name: "Framer", icon: SiFramer },
        { name: "Expo", icon: SiExpo },
        { name: "Shopify", icon: SiShopify },
        { name: "SwiftUI", icon: SiSwift },
      ],
    },
  ];
  return (
    <div className="mt-24">
      <h2 className="mb-4 font-semibold text-[#EEEEEC]">Stack</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {stackItems.map((stackItem) => (
          <div
            key={stackItem.title}
            className="bg-[#171717] border border-[#262626] rounded-md w-full p-[16px]"
          >
            <h3 className="mb-4 font-semibold text-[#EEEEEC] text-sm upperca">
              {stackItem.title}
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {stackItem.items.map((item, index) => (
                <li key={index} className="text-[#b5b3ad] text-[14px]">
                  {item.icon && (
                    <item.icon className="inline-block mr-2 w-4 h-4" />
                  )}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
