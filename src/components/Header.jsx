import React from "react";
import Navbar from "./Navbar";
import video from "../assets/HeaderVid.mp4";

const Header = () => {
  return (
    <div className="relative w-full h-full sm:h-[600px] lg:h-[700px]">
      <div className="absolute w-full h-[800px] inset-0 bg-gradient-to-r from-black z-10"></div>
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

      {/* Text Section */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center z-10 text-white px-4">
        <p className="sm:text-[1rem] mb-6 text-sm text-white max-md:max-w-full">
          Driving Results for Commercial and Federal Government
        </p>
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Your Partner in &{" "}
          <span className="bg-white text-sky-500 px-2">Business</span> &
          Technology{" "}
          <span className="bg-white text-sky-500 px-2">Transformation</span>
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl mb-6 max-w-3xl">
          Discover our comprehensive consulting services designed to elevate
          operational excellence, enhance performance, and fuel sustainable
          growth.
        </p>

        {/* Explore Now Button */}
        <div className="mt-8">
          <button className="px-6 py-3 bg-white text-[#0096E8] text-xl font-semibold rounded-md hover:bg-[#0096E8] hover:text-white transition-colors">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
