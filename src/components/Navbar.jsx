import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/NavbarLogo.png";

const Navbar = () => {
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
            <Link to="/" className="text-white font-medium hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white font-medium hover:text-blue-500"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/government"
              className="text-white font-medium hover:text-blue-500"
            >
              Government
            </Link>
          </li>
          <li>
            <Link
              to="/case-studies"
              className="text-white font-medium hover:text-blue-500"
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white font-medium hover:text-blue-500"
            >
              About A360s
            </Link>
          </li>
        </ul>

        {/* Contact Us Button */}
        <button
          className="px-4 py-2 bg-[#1b1c67] text-white rounded hover:bg-blue-500 transition"
          onClick={handleClick}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
