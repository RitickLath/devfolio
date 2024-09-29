"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profilePic from "@/app/components/profile-pic.webp";

const HeroSection = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer.",
        "Frontend Developer.",
        "Backend Developer.",
      ],
      typeSpeed: 120, // typing speed in milliseconds
      backSpeed: 120, // backspacing speed in milliseconds
      loop: true, // loop the animation
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="md:flex md:justify-between">
      {/* Text Section */}
      <div>
        <div className="mt-[100px]">
          <h1 className="text-xl lg:text-2xl font-medium">Hi There!</h1>

          <h1 className="text-3xl lg:text-5xl font-bold text-white">
            I am <span ref={el} />
          </h1>
          <h1 className="text-2xl lg:text-3xl font-semibold lg:pt-2">
            I make the complex Simple.
          </h1>
          <div className="mt-6 lg:mt-12">
            <button className="bg-[#22C55E] text-white py-2 px-4 rounded-md">
              Contact me
            </button>

            {/* Contact Info Section */}
            <div className="mt-12 hidden sm:text-sm sm:flex sm:flex-row sm:space-x-6 sm:space-y-0 space-y-6">
              {/* Email Section */}
              <div className="text-center sm:text-left">
                <h1 className="text-white font-semibold">Email</h1>
                <h1 className="text-white">ritick943lath@gmail.com</h1>
              </div>

              {/* Separator Line */}
              <div className="hidden sm:block w-[1px] bg-white" />

              {/* Phone Section */}
              <div className="text-center sm:text-left">
                <h1 className="text-white font-semibold">Phone</h1>
                <h1 className="text-white">+91 6209847887</h1>
              </div>

              {/* Separator Line */}
              <div className="hidden sm:block w-[1px] bg-white" />

              {/* Location Section */}
              <div className="text-center sm:text-left">
                <h1 className="text-white font-semibold">Location</h1>
                <h1 className="text-white">New Delhi, India</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden sm:flex md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] justify-center sm:justify-normal mt-[20px] lg:mt-[100px]">
        <Image src={profilePic} alt="Profile Pic" height={400} width={400} />
      </div>
    </div>
  );
};

export default HeroSection;
