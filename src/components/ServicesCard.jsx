import React from "react";
import Button from "./Button"; // Adjust the import path if necessary

const ServicesCard = ({ image, heading, buttonText, onButtonClick }) => {
  return (
    <div className="w-full border flex border-blue-800 rounded-3xl p-6 text-center">
      <div className="w-full">
        <img
          src={image}
          alt={heading}
          className="w-24 h-24 mx-auto object-contain"
        />
      </div>
      <div className="w-full px-4 py-1">
        <h3 className="text-sm ml-2 mb-4 text-nowrap">{heading}</h3>
        <Button
          label={buttonText}
          onClick={onButtonClick}
          variant="primary"
          size="medium"
          className="bg-blue-500"
        />
      </div>
    </div>
  );
};

export default ServicesCard;
