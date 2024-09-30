import React from "react";

import AnimatedPinDemo from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <h1 className="mt-12 text-2xl md:text-3xl text-[#22C55E] font-bold">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <AnimatedPinDemo />
        <AnimatedPinDemo />
        <AnimatedPinDemo />
        <AnimatedPinDemo />
      </div>
    </div>
  );
};

export default Projects;
