import React from "react";

const MetricCard = ({ icon, value, description }) => (
  <div className="flex flex-col items-center text-white text-center">
    <img src={icon} alt="" className="w-16 h-16 mb-4" />
    <h3 className="text-3xl font-bold">{value}</h3>
    <p className="text-base font-light">{description}</p>
  </div>
);

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
    <section className="flex flex-col justify-center items-center px-52 py-8 bg-[linear-gradient(0deg,#1B1C67_0%,#0096E8_188.17%)] rounded-[51px] max-md:px-5">
      <div className="flex flex-col w-full max-w-[1205px] max-md:max-w-full">
        <h2 className="text-2xl font-bold leading-none text-center text-white max-md:max-w-full max-md:text-4xl">
          Our Success By The Numbers
        </h2>
        <div className="flex gap-10 items-start mt-10 w-full max-md:max-w-full justify-center">
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
    </section>
  );
};

export default SuccessSection;
