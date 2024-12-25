import React from "react";
import Button from "../components/Button";

const CustomerSolution = () => {
  return (
    <div className="w-full bg-blue-900 py-16 px-6 text-center">
      <h1 className="text-white text-3xl font-bold mb-4">
        Unique Problems Custom Solutions
      </h1>
      <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
        Drawing from decades of experience, we listen carefully to understand
        the problems you face and develop comprehensive, tailored solutions
        utilizing cutting-edge technology and innovative methodologies that will
        help you reach your goals.
      </p>
      <Button
        label="Read More"
        className="mt-6 bg-blue-500 text-white font-bold"
      />
    </div>
  );
};

export default CustomerSolution;
