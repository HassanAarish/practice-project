import React from "react";
import image1 from "../assets/6.png";
import image2 from "../assets/7.png";
import image3 from "../assets/8.png";
import Button from "../components/Button";

const CommercialandFederalSuccess = () => {
  const handleClick = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
    console.log("🚀 ~ Read More button clicked");
  };
  return (
    <div className="w-full flex flex-col items-center bg-white py-16 px-4 md:px-12 lg:px-20">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-blue-600 font-medium uppercase mb-2 text-sm">
          About Our Company
        </h3>
        <h2 className="text-3xl font-bold text-blue-900">
          Let Us Be Your Partner's Preferred IT Partner
        </h2>
      </div>

      {/* Section Content */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-6xl mx-auto">
        {/* Images Section */}
        <div className="w-full flex flex-col gap-4 lg:w-1/2">
          <img
            src={image1}
            alt="Team Planning"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={image2}
            alt="Technology Solutions"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={image3}
            alt="Optimized Operations"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text and Bullet Points */}
        <div className="w-full flex flex-col gap-6 lg:w-1/2">
          <div className="text-center text-wrap justify-center items-center">
            <p>
              Advanced360 Solutions is an experienced consultancy that delivers
              business and technology solutions. We leverage first-hand
              knowledge and cutting-edge technology to optimize operations,
              drive efficiencies, and unlock your organization's full potential.
            </p>
          </div>
          {/* Button */}
          <div className="mt-6">
            <Button
              label="Read More"
              onClick={handleClick}
              variant="primary"
              size="large"
            />
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 text-2xl">✔</span>
            <p className="text-gray-700 text-lg">
              We carefully evaluate to ensure there is a real and meaningful
              connection in each partner relationship.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 text-2xl">✔</span>
            <p className="text-gray-700 text-lg">
              We ensure there is a cultural alignment, their character and
              business practices must match ours.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 text-2xl">✔</span>
            <p className="text-gray-700 text-lg">
              We treat your business and your team like they are ours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialandFederalSuccess;
