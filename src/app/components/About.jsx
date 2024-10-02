import React from "react";
import { Button } from "./ui/moving-border";

import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"], // Specify weights
  style: ["normal", "italic"], // Include both normal and italic styles
  subsets: ["latin"], // Use the 'latin' subset
});

const About = () => {
  return (
    <div className="my-10 lg:mt-20">
      <h1
        className={`${merriweather.className} text-xl sm:text-2xl md:text-3xl text-[#22C55E] font-bold mb-2 lg:mb-4`}
      >
        Who am I?
      </h1>
      <div className="md:flex justify-between">
        <div className="max-w-[500px] ">
          <p className="mb-4">
            I am a versatile{" "}
            <span className="text-white bg-gray-600 rounded-md px-2">
              Full Stack Developer
            </span>{" "}
            with a passion for creating dynamic and user-friendly web
            applications. With expertise in both{" "}
            <span className="text-white bg-gray-600 rounded-md px-2">
              frontend and backend development
            </span>
            , I specialize in the{" "}
            <span className="text-white bg-gray-600 rounded-md px-2">MERN</span>{" "}
            stack(MongoDB, Express.js, React, Node.js) and have extensive
            experience building modern, scalable applications using{" "}
            <span className="text-white bg-gray-600 rounded-md px-2">
              Next.js
            </span>{" "}
            and various UI libraries. I take pride in delivering efficient,
            clean code and intuitive interfaces that simplify complex processes.
            Whether working on the client or server side, I am committed to
            crafting seamless digital experiences from start to finish.
          </p>

          <Button className="font-medium">
            <a
              href="https://drive.google.com/file/d/1yeRkSje2T9AsjvH2VmKHxfKptqdpV4L2/view?usp=drive_link"
              target="_blank" // Optional: Opens in a new tab
              rel="noopener noreferrer" // Security best practice when using target="_blank"
            >
              Download CV
            </a>
          </Button>
        </div>

        <div className="hidden lg:flex mt-6 md:mt-0">
          <div className="flex space-x-6">
            <div>
              <div>
                <h1 className="text-white">
                  Name: <span className="text-[#7A7A7A]">Ritick Lath</span>
                </h1>
              </div>

              <div>
                <h1 className="text-white">
                  Education:{" "}
                  <span className="text-[#7A7A7A]">
                    Bachelors of Technology
                  </span>
                </h1>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-white">
                  Profession:{" "}
                  <span className="text-[#7A7A7A]">Software Developer</span>
                </h1>
              </div>
              <div>
                <h1 className="text-white">
                  Location: <span className="text-[#7A7A7A]">India</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Grid Section */}
    </div>
  );
};

export default About;
