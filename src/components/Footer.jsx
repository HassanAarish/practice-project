import React from "react";
import image from "../assets/NavbarLogo.png";
import location from "../assets/location_on.png";
import email from "../assets/email.png";
import call from "../assets/call.png";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const link = "https://apexwebstudios.net/";
  const flink = "https://www.facebook.com/";
  const ylink = "https://www.youtube.com/";
  const tlink = "https://www.twitter.com/";

  return (
    <footer className="bg-white text-gray-800 flex flex-col items-center py-8 w-full">
      <div className="flex flex-wrap justify-between max-w-6xl mx-auto gap-8">
        {/* Logo and Newsletter */}
        <div className="flex-1 min-w-[200px]">
          <div className="mb-2">
            <img src={image} alt="Footer Logo" className="w-72 h-20 mb-2" />
          </div>
          <p className="text-[#1b1c67] mb-2">
            Sign up for the Advance 360 Solutions newsletter for updates:
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 border border-gray-300 rounded text-sm text-gray-800"
            />
            <button className="bg-blue-600 text-white font-bold rounded px-4 py-2 hover:bg-blue-500 transition">
              Let's Do It
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="text-lg text-blue-500 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="/government" className="hover:text-blue-500">
                Government
              </a>
            </li>
            <li>
              <a href="/case-studies" className="hover:text-blue-500">
                Case Studies
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="text-lg text-blue-500 mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/terms" className="hover:text-blue-500">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-blue-500">
                FAQ's
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-blue-500">
                Privacy & Policy
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg text-blue-500 mb-4">Get in Touch</h4>
          <div className="space-y-3">
            <div className="flex items-center">
              <img src={location} alt="location" className="w-6 h-6 mr-3" />
              <p>46164 Westlake Dr. #650422 Sterling, VA 20165-9998</p>
            </div>
            <div className="flex items-center">
              <img src={email} alt="email" className="w-6 h-6 mr-3" />
              <p>info@a360s.com</p>
            </div>
            <div className="flex items-center">
              <img src={call} alt="phone" className="w-6 h-6 mr-3" />
              <p>+1 (703) 644-8000</p>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <a
              href={flink}
              className="text-blue-800 bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition"
            >
              <FaFacebook />
            </a>
            <a
              href={ylink}
              className="text-blue-800 bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition"
            >
              <FaYoutube />
            </a>
            <a
              href={tlink}
              className="text-blue-800 bg-white p-2 rounded-full hover:bg-blue-500 hover:text-white transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full bg-[#1b1c67] text-white text-center py-4 mt-8">
        <p>
          © All Rights Reserved 2024 Advanced 360 Solutions. Powered by
          <a href={link} className="text-blue-400 hover:underline ml-1">
            Apex Web Studios
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
