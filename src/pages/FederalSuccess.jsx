import React from "react";
import image from "../assets/1.png";

const CommercialandFederalSuccess = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div className="flex justify-between items-center p-12 bg-white">
      <div className="max-w-lg">
        {/* Left side of the section Transforming */}
        <div className="flex flex-col w-full max-md:max-w-full">
          <h1 className="text-sm italic text-blue-950 max-md:max-w-full">
            Driving Results for Commercial and Federal Success
          </h1>
          <h2 className="-mt-2 pt-3 text-5xl font-bold text-[#1b1c67] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Transforming
            <span className="text-sky-500 -mt-2"> Technology & Strategy </span>
            {""}
            for Tomorrow
          </h2>
          <p className="-mt-1 pt-3 text-wrap font-medium leading-4 text-neutral-900 max-md:max-w-full">
            Explore our full range of consulting services designed to enhance
            operational excellence, improve compliance, and drive sustainable
            growth
          </p>
        </div>
        <button
          onClick={handleClick}
          className="mt-4 px-3 py-2 bg-[#1b1c67] text-white rounded hover:bg-blue-600"
        >
          Explore Now
        </button>
      </div>
      {/* Right side of the section Image */}
      <div className="">
        <img src={image} alt="Section1 image" />
      </div>
    </div>
  );
};

export default CommercialandFederalSuccess;
