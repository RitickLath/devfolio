"use client";
import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";

export default function BackgroundBeamsDemo() {
  return (
    <div className="w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="w-full min-h-screen px-6 md:px-24 lg:px-32 text-[#7A7A7A]">
        {/* HERO SECTION */}
        <HeroSection />
        {/* ABOUT SECTION */}
        <About />
      </div>
      <BackgroundBeams />
    </div>
  );
}
