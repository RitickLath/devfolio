import React from "react";

const About = () => {
  return (
    <div className="mt-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-[#22C55E] font-semibold mb-2 lg:mb-4">
        Who am I?
      </h1>
      <div className="md:flex justify-between">
        <div className="md:w-[300px] lg:w-[500px]">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            assumenda ipsa illum nostrum dignissimos repudiandae esse eveniet
            iste molestiae quis similique accusamus dolorem cupiditate, nobis
            sit? Doloribus inventore id eveniet?
          </p>
          <button className="bg-[#22C55E] mt-4 text-white py-1 px-4 rounded-md">
            Download CV
          </button>
        </div>

        <div className="grid sm:grid-cols-2 mt-6 md:mt-0">
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
      {/* Grid Section */}
    </div>
  );
};

export default About;
