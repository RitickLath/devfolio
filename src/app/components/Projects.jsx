"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"], // Specify weights
  style: ["normal", "italic"], // Include both normal and italic styles
  subsets: ["latin"], // Use the 'latin' subset
});

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    <ProjectCard
      title="Imaginary"
      description="Imaginary is an advanced image editing application built with Next.js, offering a wide range of AI-powered image transformation features. Users can enhance images, sharpen details, remove backgrounds, and utilize AI to restore, fill, or replace parts of an image. With secure authentication powered by Clerk, all editing features are protected for logged-in users. The app provides 15 free image edits, with additional edits available through a credit-based system. Styled with Tailwind CSS and deployed on Vercel, Imaginary ensures a smooth, fast, and scalable user experience."
      liveLink="https://imaginary1.netlify.app/"
      github="https://github.com/RitickLath/Imaginary"
      techList={[
        "Next.Js",
        "PostgreSQL",
        "Prisma ORM",
        "Cloudinary",
        "Clerk",
        "Recoil",
        "Tailwind",
        "Server Action",
      ]}
      key={1}
    />,

    <ProjectCard
      title="Giphy Clone"
      description="This Giphy Clone is a responsive web app built with React, offering users the ability to browse and search for GIFs, Stickers, and Clips from the Giphy API. It features an optimized search bar with debouncing for improved performance, and users can 'like' their favorite GIFs to save them in a Favorites section. Styled with Tailwind CSS, the app is fully responsive and deployed on Netlify for easy access"
      liveLink="https://giphy1.netlify.app/Science"
      github="https://github.com/RitickLath/Gipgy-Clone"
      techList={[
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Giphy API",
        "Debouncing",
        "Responsiveness",
      ]}
      key={2}
    />,
    <ProjectCard
      title="Advance Netflix GPT"
      description="**Netflix GPT** is a React-based web application that replicates the Netflix experience, featuring seamless navigation and a sleek user interface. Utilizing the **TMDB API**, it fetches movie data and trailers, while integrating **Firebase Authentication** for secure user access. The standout feature is the **OpenAI GPT** integration, which provides personalized movie recommendations based on user prompts. The app is fully responsive, built with **Tailwind CSS**, and achieves exceptional performance with a Lighthouse score of 95+. This project exemplifies modern web development practices and delivers an engaging user experience."
      liveLink="https://netflixgpt-3dea2.firebaseapp.com/"
      github="https://github.com/RitickLath/Netflix_GPT"
      techList={[
        "React",
        "TMDB API",
        "Firebase",
        "OpenAI GPT",
        "React Router",
        "Tailwind CSS",
        "JavaScript",
        "Responsiveness",
      ]}
      key={3}
    />,
    <ProjectCard
      title="Edubridge"
      description="EduBridge is a MERN stack-based online learning platform that enhances the educational experience for students and instructors. It features secure user authentication via JWT and OTP verification, allowing users to sign up and log in safely. Instructors can create and manage courses, while students can browse and view detailed course information. The platform includes a contact form for user inquiries and employs Zod for input validation."
      liveLink="https://netflixgpt-3dea2.firebaseapp.com/"
      github="https://edtech-portal.vercel.app/"
      techList={[
        "React",
        "React Router",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT (JSON Web Tokens)",
        "Nodemailer",
        "Zod",
        "Tailwind CSS",
        "Vercel",
        "Render",
        "Cloudinary",
      ]}
      key={4}
    />,
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1
          className={`${merriweather.className} mt-12 text-2xl md:text-3xl text-white font-bold`}
        >
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
