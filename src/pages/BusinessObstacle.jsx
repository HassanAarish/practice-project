import React from "react";
import image from "../assets/9.png";

const BusinessObstacle = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-white py-16 px-6 gap-8">
      {/* Left Content */}
      <div className="flex-1">
        <h1 className="text-blue-600 text-3xl font-bold mb-6">
          Business Obstacles Defined by Industry Experts
        </h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-blue-900 text-xl font-semibold">
              Optimize Technology Solutions
            </h2>
            <p className="text-gray-600">
              83% of annual budgets inefficiently go toward new technology
              without prioritizing transparency, accountability, or
              sustainability. We ensure your team, processes, and tools are
              optimized to support your strategic goals.
            </p>
          </div>
          <div>
            <h2 className="text-blue-900 text-xl font-semibold">
              Break Down Organizational Silos
            </h2>
            <p className="text-gray-600">
              51% of organizations cite siloed strategies as a significant
              barrier. We unify teams and strategies for seamless planning and
              execution.
            </p>
          </div>
          <div>
            <h2 className="text-blue-900 text-xl font-semibold">
              Build a Culture of Innovation
            </h2>
            <p className="text-gray-600">
              Over 60% of teams resist change. We help create a culture that
              embraces innovation and modern practices.
            </p>
          </div>
          <div>
            <h2 className="text-blue-900 text-xl font-semibold">
              Maximize Funding Efficiency
            </h2>
            <p className="text-gray-600">
              Compartmentalized strategies waste up to 20% of budgets. We
              reframe technology as a strategic investment, driving measurable
              ROI.
            </p>
          </div>
          <div>
            <h2 className="text-blue-900 text-xl font-semibold">
              Bridge Digital Skills Gaps
            </h2>
            <p className="text-gray-600">
              70% of CIOs report insufficient digital skills as a challenge. We
              equip your teams with the expertise needed for success.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1">
        {/* Placeholder for the image */}
        <div className="w-full h-auto bg-gray-200 rounded-lg">
          {/* Replace this div with your image */}
          <img
            src={image}
            alt="Descriptive Alt Text"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessObstacle;
