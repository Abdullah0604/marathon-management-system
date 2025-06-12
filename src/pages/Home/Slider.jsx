import React from "react";

import { FaRegClock } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";

function Slider({ content }) {
  const { title, description, image, eventDate, deadline, buttonText } =
    content;
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 py-32 md:px-16 bg-gradient-to-r from-black/90 via-gray-900 to-black text-white rounded-xl">
      {/* Content Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-sm sm:text-base lg:text-[17px]  text-gray-300 mb-6">
          {description}
        </p>

        <div className="flex items-center gap-4 md:gap-x-8  md:text-base mb-6 justify-center lg:justify-start">
          <span className="text-sm flex flex-col justify-center md:flex-row items-center gap-2">
            <MdOutlineEventAvailable size={20} className="text-blue-400 " />
            Event Date: {eventDate}
          </span>
          <span className="text-sm flex flex-col justify-center md:flex-row items-center gap-2">
            <FaRegClock size={20} className="text-red-400 " />
            Registration ends: {deadline}
          </span>
        </div>

        <button className="px-6 py-3 text-sm bg-orange-500/90 hover:bg-orange-500 transition-all text-white rounded-md font-semibold">
          {buttonText}
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={image}
          alt="Marathon Banner"
          className="w-full max-w-md md:max-w-xl rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default Slider;
