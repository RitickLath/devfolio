import React, { useState } from "react";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"], // Specify weights
  style: ["normal", "italic"], // Include both normal and italic styles
  subsets: ["latin"], // Use the 'latin' subset
});

const ContactMe = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Replace with your WhatsApp number (without + or dashes)
  const whatsappNumber = "1234567890";

  // Function to handle WhatsApp redirect with pre-filled message
  const handleContact = () => {
    const preFilledMessage = `Hi ${name},\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/${916209847887}?text=${encodeURIComponent(
      preFilledMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="max-w-[700px] mt-12">
      <h1
        className={`${merriweather.className} text-2xl md:text-3xl text-white font-bold`}
      >
        Contact Me
      </h1>
      <hr className="border-[#1D1D1D] my-3" />

      {/* Name Input */}
      <div className="my-4">
        <label className="block text-white mb-2" htmlFor="name">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full px-4 outline-none py-2 bg-[#2D2D2D] text-white rounded-md"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Message Input */}
      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="message">
          Your Message
        </label>
        <textarea
          id="message"
          className="w-full px-4 outline-none py-2 bg-[#2D2D2D] text-white rounded-md"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
        ></textarea>
      </div>

      {/* Contact Button */}
      <button
        onClick={handleContact}
        className="w-full flex items-center justify-center px-6 py-2 text-[#22C55E] rounded-md bg-[#1E1E1E] hover:bg-[#142117] cursor-pointer"
      >
        Contact Me
      </button>
    </div>
  );
};

export default ContactMe;
