import React from "react";
import { IoIosGitNetwork, IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript, TbBrandReactNative } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiSequelize,
  SiTailwindcss,
  SiRedux,
  SiRecoil,
  SiDocker,
  SiGithub,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { LuDatabaseBackup } from "react-icons/lu";

import { MdBuild } from "react-icons/md"; // Build icon

const frontendSkills = [
  {
    icon: <IoLogoJavascript />,
    name: "JavaScript",
    iconColor: "text-yellow-500",
  },
  {
    icon: <TbBrandTypescript />,
    name: "TypeScript",
    iconColor: "text-blue-500",
  },
  { icon: <FaReact />, name: "React.JS", iconColor: "text-blue-500" },
  {
    icon: <TbBrandReactNative />,
    name: "React Native",
    iconColor: "text-blue-500",
  },
  { icon: <SiNextdotjs />, name: "Next.JS", iconColor: "text-black" },
];

const backendSkills = [
  { icon: <SiNodedotjs />, name: "Node.JS", iconColor: "text-green-500" },
  { icon: <SiExpress />, name: "Express", iconColor: "text-gray-600" },
];

const databaseSkills = [
  { icon: <SiMysql />, name: "MySQL", iconColor: "text-blue-600" },
  { icon: <SiPostgresql />, name: "PostgreSQL", iconColor: "text-blue-600" },
  { icon: <SiMongodb />, name: "MongoDB", iconColor: "text-green-600" },
  { icon: <SiPrisma />, name: "Prisma", iconColor: "text-black" },
  { icon: <SiSequelize />, name: "Sequelize", iconColor: "text-blue-600" },
];

const frameworkAndLibrariesSkills = [
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    iconColor: "text-cyan-400",
  },
];

const stateManagementSkills = [
  { icon: <SiRedux />, name: "Redux Toolkit", iconColor: "text-purple-600" },
  { icon: <SiRecoil />, name: "Recoil", iconColor: "text-blue-600" },
];

const otherToolsSkills = [
  { icon: <SiGit />, name: "Git", iconColor: "text-orange-600" },
  { icon: <SiGithub />, name: "GitHub", iconColor: "text-gray-600" },
  { icon: <SiDocker />, name: "Docker", iconColor: "text-blue-500" },
];

const programmingLanguages = [
  {
    icon: <FaJava className="text-blue-600" />,
    name: "Java",
    iconColor: "",
  },
  {
    icon: <IoLogoJavascript />,
    name: "JavaScript",
    iconColor: "text-yellow-500",
  },
  {
    icon: <TbBrandTypescript />,
    name: "TypeScript",
    iconColor: "text-blue-500",
  },
];

const fundamentalsSkills = [
  {
    icon: <MdBuild className="text-blue-600" />,
    name: "Data Structures and Algorithms",
    iconColor: "",
  }, // Added a placeholder icon
  {
    icon: <LuDatabaseBackup className="text-blue-600" />,
    name: "DBMS",
    iconColor: "text-green-500",
  }, // Added a placeholder icon
  {
    icon: <IoIosGitNetwork className="text-blue-600" />,
    name: "Networking",
    iconColor: "text-blue-500",
  }, // Added a placeholder icon
];

const SkillItem = ({ icon, name, iconColor }) => (
  <h1 className="mr-6 lg:mr-12 flex items-center">
    <span className="mr-2">
      {React.cloneElement(icon, { className: iconColor })}
    </span>
    {name}
  </h1>
);

const SkillCategory = ({ title, skills }) => (
  <div className="mt-5 md:mt-8">
    <h1 className="text-xl mb-3 text-[#3B82EE]">{title}</h1>
    <div className="max-w-[400px] lg:max-w-[700px] flex flex-wrap text-white ml-3 mt-2">
      {skills.map((skill, index) => (
        <SkillItem
          key={index}
          icon={skill.icon}
          name={skill.name}
          iconColor={skill.iconColor}
        />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl text-[#22C55E] font-bold mb-2 lg:mb-4">
        Tools and Technologies
      </h1>
      <hr className="border-[#1D1D1D] my-3" />
      <SkillCategory title="Frontend Technologies" skills={frontendSkills} />
      <SkillCategory title="Backend Technologies" skills={backendSkills} />
      <SkillCategory title="Databases AND ORM" skills={databaseSkills} />
      <SkillCategory
        title="Framework & Libraries"
        skills={frameworkAndLibrariesSkills}
      />
      <SkillCategory title="State Management" skills={stateManagementSkills} />
      <SkillCategory title="Other Tools" skills={otherToolsSkills} />
      <SkillCategory
        title="Programming Languages"
        skills={programmingLanguages}
      />
      <SkillCategory title="Fundamentals" skills={fundamentalsSkills} />
    </div>
  );
};

export default Skills;
