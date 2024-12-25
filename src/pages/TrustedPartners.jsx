import React from "react";
import image1 from "../assets/Trusted1.png";
import image2 from "../assets/Trusted2.png";
import image3 from "../assets/Trusted3.png";
import image4 from "../assets/Trusted4.png";

const TrustedPartners = () => {
  return (
    <div className="w-full mt-8 bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg py-16 px-8 text-center max-w-7xl mx-auto">
      <h2 className="text-white text-3xl font-bold mb-8">
        Our Trusted Partners
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        {/* Partner Logos */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={image1}
            alt="Transformation Accelerator"
            className="mx-auto h-16"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={image2} alt="Unisys" className="mx-auto h-16" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={image3} alt="Bofinet" className="mx-auto h-16" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={image4}
            alt="Private Directors Association"
            className="mx-auto h-16"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
