"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    <ProjectCard key={1} />,
    <ProjectCard key={2} />,
    <ProjectCard key={3} />,
    <ProjectCard key={4} />,
    <ProjectCard key={5} />,
    <ProjectCard key={6} />,
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="mt-12 text-2xl md:text-3xl text-[#22C55E] font-bold">
          Projects
        </h1>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-[#22C55E] mt-12"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
      <hr className="border-[#1D1D1D] my-3" />

      {displayedProjects.map((project, index) => (
        <React.Fragment key={index}>{project}</React.Fragment>
      ))}
    </div>
  );
};

export default Projects;
