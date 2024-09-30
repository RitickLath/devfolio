import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const Footer = () => {
  return (
    <footer className="w-full my-4">
      <hr className="border-[#1D1D1D] border-dotted my-3" />
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Social Icons */}
        <div className="flex space-x-1 lg:space-x-3">
          <a
            href="https://github.com/RitickLath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#22C55E] p-2 rounded-md"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.instagram.com/ritick_lath/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#22C55E] p-2 rounded-md"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/ritick-lath-xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#22C55E] p-2 rounded-md"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://wa.me/916209847887" // Replace with your WhatsApp number (in international format)
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#22C55E] p-2 rounded-md"
          >
            <FaWhatsapp className="text-xl" />
          </a>
        </div>

        {/* Developer Text */}
        <div>
          <p className="text-white text-xs">
            Developed by{" "}
            <span className="text-[#22C55E] font-semibold">Ritick Lath</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
