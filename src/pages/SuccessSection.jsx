import React from "react";
import MetricCard from "../components/MetricCard";
import { metricsData } from "../constant";
import Button from "../components/Button";

const SuccessSection = () => {
  const handleClick = (event) => {
    event?.preventDefault();
    const contactSection = document?.getElementById("contact-section");
    contactSection
      ? contactSection?.scrollIntoView({ behavior: "smooth" })
      : null;
  };
  return (
    <div className="w-full flex flex-col bg-white py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-screen-lg mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900">
          Our <span className="text-blue-600">Success</span> By The Numbers
        </h2>
      </div>
      <div className="w-full flex justify-center gap-8">
        {metricsData?.map((metric, index) => (
          <MetricCard
            key={index}
            icon={metric?.icon}
            value={metric?.value}
            description={metric?.description}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button
          label="Contact Us"
          className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SuccessSection;
