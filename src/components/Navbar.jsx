import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/NavbarLogo.png";

const Navbar = () => {
  const handleClick = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-between items-center px-12 py-2.5 bg-white text-black">
      {/* Logo */}
      <div className="text-0 font-bold">
        <img src={image} alt="NavbarLogo" className="w-36 max-h-12" />
      </div>

      {/* Navigation Links */}
      <ul className="list-none flex gap-6">
        <li>
          <Link to="/" className="text-black font-medium hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="text-black font-medium hover:text-blue-500"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/government"
            className="text-black font-medium hover:text-blue-500"
          >
            Government
          </Link>
        </li>
        <li>
          <Link
            to="/case-studies"
            className="text-black font-medium hover:text-blue-500"
          >
            Case Studies
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-black font-medium hover:text-blue-500"
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
    </nav>
  );
};

export default Navbar;
