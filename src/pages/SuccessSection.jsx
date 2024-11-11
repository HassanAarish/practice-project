import React from "react";
import MetricCard from "../components/MetricCard";

const SuccessSection = () => {
  const metricsData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d77c97deb165b903becb31ccfadae73cf0b9f74598e5c26e927cf737b3fa73e?placeholderIfAbsent=true&apiKey=a43ca88054c74c21af64d2a0d470b080",
      value: "$1000,000,000",
      description: "5 Year Financial Budget Models Developed",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e7dce832e1117a628cf8a31ca2bf9cb9ec85ec5f027501500fbac29464bd287e?placeholderIfAbsent=true&apiKey=a43ca88054c74c21af64d2a0d470b080",
      value: "2",
      description: "IPO Listings NYSE & NASDAQ​",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/af1a875c65ba63e8d5eef5308e4407bce9403badbd66439958a2850e9a19d6c3?placeholderIfAbsent=true&apiKey=a43ca88054c74c21af64d2a0d470b080",
      value: "$60,000,000",
      description: "Digital Transformation Projects Delivered In 1% of Budget",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f08281331b11612cfc4dfea11bb22eca17aa8fe3084e2eb869f3b2801762b09f?placeholderIfAbsent=true&apiKey=a43ca88054c74c21af64d2a0d470b080",
      value: "7+",
      description: "U.S. Patents",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex flex-col justify-center items-center rounded-[2rem] bg-gradient-to-r from-[#1B1C67] to-[#00527e]">
        <div className="justify-center p-[0.75rem]">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Our Success By The Numbers
          </h2>
          <div className="flex flex-wrap gap-10 items-start justify-center text-wrap">
            {metricsData.map((metric, index) => (
              <MetricCard
                key={index}
                icon={metric.icon}
                value={metric.value}
                description={metric.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
