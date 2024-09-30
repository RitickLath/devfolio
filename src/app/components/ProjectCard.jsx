import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const ProjectCard = ({
  title = "Synapse - AI Assistant",
  description = "This is a powerful AI assistant application...",
  techList = [
    "Nextjs",
    "Gemini AI",
    "TypeScript",
    "Langchain",
    "Google Search API",
  ],
  liveLink = "https://react-icons.github.io/react-icons/search/#q=github",
  github = "#",
}) => {
  return (
    <div className="max-w-[700px]">
      <h1 className="text-xl lg:text-2xl mb-2 font-semibold text-white">
        {title}
      </h1>

      <p>{description}</p>

      <div className="flex flex-wrap mt-4">
        {techList.map((item, index) => (
          <div
            className="px-3 mr-2 mb-2 rounded-md py-1 bg-[#1E1E1E] text-white"
            key={index}
          >
            <h1 className="break-words">{item}</h1>
          </div>
        ))}
      </div>

      <div className="mt-4 sm:flex sm:justify-between sm:w-full">
        {/* Live Site Button */}
        <button
          onClick={() => window.open(liveLink, "_blank")}
          className="w-full flex items-center justify-center sm:w-[45%] px-6 py-2 text-[#22C55E] rounded-md bg-[#1E1E1E] hover:bg-[#142117] cursor-pointer mb-3 sm:mb-0"
        >
          <FaExternalLinkAlt />
          <h1 className="ml-2">Live Site</h1>
        </button>

        {/* GitHub Button */}
        <button
          onClick={() => window.open(github, "_blank")}
          className="w-full flex items-center justify-center sm:w-[45%] px-6 py-2 text-[#22C55E] rounded-md bg-[#1E1E1E] hover:bg-[#142117] cursor-pointer"
        >
          <IoLogoGithub className="text-lg" />
          <h1 className="ml-2">Source Code</h1>
        </button>
      </div>
      <hr className="border-[#1D1D1D] border-dotted my-3" />
    </div>
  );
};

export default ProjectCard;

