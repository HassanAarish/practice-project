import React from "react";
import "./Section1.css";
import image from "../../assets/12.png";

const Section1 = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Transforming Technology & Strategy for Tomorrow</h1>
      <p>
        Explore our full range of consulting services designed to enhance
        operational excellence, improve compliance, and drive sustainable
        growth.
      </p>
      <button className="explore-btn">Explore Now</button>
    </div>
    <div className="hero-image">
      {/* Add your image or illustration here */}
      <img src={image} alt="Technology Illustration" />
    </div>
  </section>
);

export default Section1;
