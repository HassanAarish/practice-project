import React from "react";
import Navbar from "./Navbar";
import video from "../assets/HeaderVid.mp4";

const Header = () => {
  return (
    <div className="relative w-full h-full sm:h-[600px] lg:h-[700px]">
      <Navbar />
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Subheading */}
      <p className="bg-black text-lg sm:text-xl mb-6">
        Driving Results for Commercial and Federal Government
      </p>

      {/* Text Section */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center z-10 text-white px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Your Partner in Business & Technology Transformation
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl mb-6">
          Discover our comprehensive consulting services designed to elevate
          operational excellence, enhance performance, and fuel sustainable
          growth.
        </p>

        {/* Explore Now Button */}
        <button className="absolute bottom-8 px-6 py-3 bg-white text-[#0096E8] text-xl font-semibold rounded-md hover:bg-blue-700 transition-colors">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Header;
