import React from "react";
import { servicesData } from "../constant";
import ServicesCard from "../components/ServicesCard";
import Button from "../components/Button";

const Services = () => {
  return (
    <section className="w-full py-12">
      <div className="w-full flex flex-col items-center justify-center gap-4 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData?.map((service, index) => (
            <ServicesCard
              key={index}
              image={service?.image}
              heading={service?.heading}
              buttonText={service?.buttonText}
              onButtonClick={() => alert(`${service?.heading} clicked`)}
            />
          ))}
        </div>
        <Button label="Read More" className="bg-blue-500" />
      </div>
    </section>
  );
};

export default Services;
