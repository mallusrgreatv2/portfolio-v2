import {
  SiJavascript,
  SiPython,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiMongoose,
  SiDrizzle,
  SiDiscord,
  SiGit,
  SiPrettier,
  SiEslint,
  SiPterodactyl,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiLua,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

export const knowledgeSections = [
  {
    title: "Languages",
    align: "left",
    items: [
      { icon: <SiJavascript />, label: "JavaScript" },
      { icon: <SiPython />, label: "Python" },
      { icon: <DiJava />, label: "Java" },
      { icon: <SiLua />, label: "Lua" },
    ],
  },
  {
    title: "Database",
    align: "right",
    items: [
      { label: "MongoDB", icon: <SiMongodb /> },
      { label: "Mongoose", icon: <SiMongoose /> },
      { label: "MySQL", icon: <SiMysql /> },
      { label: "PostgreSQL", icon: <SiPostgresql /> },
      { label: "Prisma ORM", icon: <SiPrisma /> },
      { label: "Drizzle ORM", icon: <SiDrizzle /> },
    ],
  },
  {
    title: "Tools",
    align: "left",
    items: [
      { icon: <VscVscode />, label: "Visual Studio Code" },
      { icon: <SiDiscord />, label: "Discord" },
      { icon: <SiGit />, label: "Git" },
      { icon: <SiPrettier />, label: "Prettier" },
      { icon: <SiEslint />, label: "ESLint" },
      { icon: <SiPterodactyl />, label: "Pterodactyl" },
    ],
  },
  {
    title: "Libraries",
    align: "right",
    items: [
      { label: "Discord.js", icon: <SiDiscord /> },
      { label: "React.js", icon: <SiReact /> },
      { label: "Next.js", icon: <SiNextdotjs /> },
      { label: "TailwindCSS", icon: <SiTailwindcss /> },
      { label: "Express", icon: <SiExpress /> },
    ],
  },
];
