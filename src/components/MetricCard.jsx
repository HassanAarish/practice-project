import React from "react";
import PropTypes from "prop-types";

const MetricCard = ({ icon, value, description }) => {
  return (
    <div className="w-64 min-h-[16rem] bg-gradient-to-b from-blue-900 to-blue-800 text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-between">
      <img src={icon} alt="Metric Icon" className="w-12 h-12 mb-4" />
      <h3 className="text-4xl font-bold text-center">{value}</h3>
      <p className="text-center font-normal mt-2 text-sm">{description}</p>
    </div>
  );
};

MetricCard.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MetricCard;