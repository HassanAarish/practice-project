import React from "react";
import Navbar from "./Navbar";
import video from "../assets/HeaderVid.mp4";

const Header = () => {
  const handleClick = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
    console.log("🚀 ~ Explore Now button clicked");
  };

  return (
    <div
      id="header-section"
      className="relative w-full h-full sm:h-[600px] lg:h-[700px] overflow-hidden"
    >
      {/* Navbar */}
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

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent z-10"></div>

      {/* Text Section */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center z-20 text-white px-4 mt-32">
        {/* Subtitle */}
        <p className="text-sm sm:text-lg mb-4 max-w-3xl">
          Driving Results for Commercial and Federal Government
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-semibold leading-snug mb-4">
          Your Partner in{" "}
          <span className="bg-white text-sky-500 px-2">Business</span> &{" "}
          Technology{" "}
          <span className="bg-white text-sky-500 px-2">Transformation</span>
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-lg mb-6 max-w-3xl">
          Discover our comprehensive consulting services designed to elevate
          operational excellence, enhance performance, and fuel sustainable
          growth.
        </p>

        {/* Explore Now Button */}
        <button
          className="px-6 py-3 mt-2 bg-white text-[#0096E8] text-lg sm:text-xl font-semibold rounded-md hover:bg-[#0096E8] hover:text-white transition-colors"
          onClick={handleClick}
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Header;
