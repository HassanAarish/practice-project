import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/NavbarLogo.png";

const Navbar = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const headerSection = document.getElementById("header-section");

    if (headerSection) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsHeaderVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      observer.observe(headerSection);

      return () => observer.disconnect();
    }
  }, []);

  const handleClick = () => {
    const contactSection = document?.getElementById("contact-section");
    contactSection
      ? contactSection?.scrollIntoView({ behavior: "smooth" })
      : null;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 px-4 py-4 text-black shadow-lg">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="font-bold">
          <img src={image} alt="NavbarLogo" className="w-36 max-h-12" />
        </div>

        {/* Navigation Links */}
        <ul className="list-none flex gap-6">
          <li>
            <Link
              to="/"
              className={`font-medium hover:text-blue-500 ${
                isHeaderVisible ? "text-white" : "text-black"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`font-medium hover:text-blue-500 ${
                isHeaderVisible ? "text-white" : "text-black"
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/government"
              className={`font-medium hover:text-blue-500 ${
                isHeaderVisible ? "text-white" : "text-black"
              }`}
            >
              Government
            </Link>
          </li>
          <li>
            <Link
              to="/case-studies"
              className={`font-medium hover:text-blue-500 ${
                isHeaderVisible ? "text-white" : "text-black"
              }`}
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`font-medium hover:text-blue-500 ${
                isHeaderVisible ? "text-white" : "text-black"
              }`}
            >
              About A360s
            </Link>
          </li>
        </ul>

        {/* Contact Us Button */}
        <button
          className="px-4 py-2 bg-[#0096E8] text-white rounded hover:bg-[#1b1c67] transition"
          onClick={handleClick}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
