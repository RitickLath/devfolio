"use client";
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { Qwitcher_Grypen } from "next/font/google";

const qwitcherGrypen = Qwitcher_Grypen({
  weight: ["400", "700"], // Specify weights
  subsets: ["latin"], // Use the 'latin' subset
});

export default function BackgroundBeamsDemo() {
  return (
    <div className="w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="w-full z-10 min-h-screen px-6 md:px-24 lg:px-32 text-[#7A7A7A]">
        {/* <h1
          className={`${qwitcherGrypen.className} mt-4 text-3xl md:text-5xl text-white`}
        >
          Ritick Lath
        </h1> */}
        {/* HERO SECTION */}
        <HeroSection />
        {/* ABOUT SECTION */}
        <About />
        {/* SKILLS */}
        <Skills />
        {/* PROJECTS */}
        <Projects />
        {/*  */}
        {/* CONTACT ME */}
        <ContactMe />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

// https://i.pinimg.com/564x/50/1a/72/501a72ac607583aa98ce7445030a0654.jpg
