import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const ContactUs = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("🚀 ~ Submit button triggered");
    alert("Message Sent Successfully!");
  };

  const fLink = "https://www.facebook.com/";
  const tLink = "https://www.twitter.com/";
  const iLink = "https://www.instagram.com/";

  return (
    <div className="w-full flex flex-col md:flex-row bg-[#1b1c67] rounded-lg p-8 text-white max-w-6xl mx-auto gap-8">
      {/* Left Section - Contact Information */}
      <div className="flex-1 p-4">
        <p className="italic text-gray-300 mb-2">
          We’re Here to Help You Share Your Story
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Contact Us For Information On Our Services
        </h2>
        <p className="text-base leading-relaxed mb-6">
          Have questions or need more information about our program? Reach out
          to us, and we’ll be happy to assist. Let’s keep the conversation going
          and create something truly extraordinary together.
        </p>
        <div className="w-full flex flex-col gap-4 space-y-4">
          <div className="flex items-center text-lg">
            <FaEnvelope size={20} className="mr-3 text-white" />
            <p className="text-normal text-sm">info@a360s.com</p>
          </div>
          <div className="flex items-center text-lg border border-white rounded-lg py-4">
            <FaPhone size={20} className="mr-3 ml-2 text-white" />
            <p className="text-normal text-sm">+1 (703) 644-8000</p>
          </div>
          <div className="flex items-center text-lg">
            <FaMapMarkerAlt size={20} className="mr-3 text-white" />
            <p className="text-normal text-sm">
              46164 Westlake Dr. #650422 Sterling, VA 20165-9998
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <Link
            to={fLink}
            className="text-white bg-[#1b1c67] p-3 rounded-full hover:bg-blue-600 transition"
          >
            <FaFacebook />
          </Link>
          <Link
            to={iLink}
            className="text-[#1b1c67] bg-white p-3 rounded-full hover:bg-blue-600 transition"
          >
            <FaInstagram />
          </Link>
          <Link
            to={tLink}
            className="text-white bg-[#1b1c67] p-3 rounded-full hover:bg-blue-600 transition"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="flex-1 bg-white text-gray-700 rounded-lg p-8 shadow-lg">
        <h3 className="text-xl font-bold text-[#1b1c67] mb-4">Contact Us</h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border-b-[#1b1c67] border border-white outline-none text-base placeholder-gray-400"
          />
          <input
            type="tel"
            placeholder="Phone No"
            className="p-3 border-b-[#1b1c67] border border-white outline-none text-base placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border-b-[#1b1c67] border border-white outline-none text-base placeholder-gray-400"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border-b-[#1b1c67] border border-white outline-none text-base placeholder-gray-400 resize-none h-32"
          ></textarea>
          <Button
            icon={<FaPaperPlane />}
            label="Send Message"
            onClick={handleClick}
            className="w-56 bg-[#1b1c67] text-white font-bold rounded hover:bg-blue-600 transition flex items-center justify-center gap-2"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
