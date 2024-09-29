import React from "react";
import { Button } from "./ui/moving-border";

const About = () => {
  return (
    <div className="my-10 lg:mt-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-[#22C55E] font-semibold mb-2 lg:mb-4">
        Who am I?
      </h1>
      <div className="md:flex justify-between">
        <div className="max-w-[500px] ">
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            assumenda ipsa illum nostrum dignissimos repudiandae esse eveniet
            iste molestiae quis similique accusamus dolorem cupiditate, nobis
            sit? Doloribus inventore id eveniet?
          </p>

          <Button className="font-medium">Download CV</Button>
        </div>

        <div className="hidden lg:flex mt-6 md:mt-0">
          <div>
            <div>
              <h1 className="text-white">
                Name: <span className="text-[#7A7A7A]">Ritick Lath</span>
              </h1>
            </div>

            <div>
              <h1 className="text-white">
                Education:{" "}
                <span className="text-[#7A7A7A]">Bachelors of Technology</span>
              </h1>
            </div>
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
      {/* Grid Section */}
    </div>
  );
};

export default About;
