import React from "react";

const MetricCard = ({ icon, value, description }) => {
  return (
    <div className="flex flex-col items-center text-white text-center text-wrap max-w-[12.5rem]">
      <img src={icon} alt="" className="w-16 h-16 mb-4" />
      <h3 className="text-3xl font-bold">{value}</h3>
      <p className="text-base font-light mt-2">{description}</p>
    </div>
  );
};

export default MetricCard;
