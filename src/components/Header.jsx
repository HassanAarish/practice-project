import React from "react";

const BottomSection = () => {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Section */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center z-10 text-white px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Take the next step with us
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl mb-6">
          We are here to help you grow your business. Join us and start your
          journey today!
        </p>

        {/* Explore Now Button */}
        <button className="relative px-6 py-3 bg-blue-600 text-white text-xl font-semibold rounded-full hover:bg-blue-700 transition-colors">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default BottomSection;
