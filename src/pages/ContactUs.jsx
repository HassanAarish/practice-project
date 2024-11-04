import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap bg-gradient-to-br from-blue-500 to-blue-900 rounded-lg p-8 text-white max-w-6xl mx-auto gap-8">
      {/* Left Section - Contact Information */}
      <div className="flex-1 p-4 flex flex-col gap-4">
        <p className="italic text-gray-300">
          We’re Here to Help You Share Your Story
        </p>
        <h2 className="text-2xl font-bold">
          Contact Us For Information On Our Services
        </h2>
        <p className="text-base leading-relaxed">
          Have questions or need more information about our program? Reach out
          to us, and we’ll be happy to assist. Let’s keep the conversation going
          and create something truly extraordinary together.
        </p>
        <div className="space-y-3">
          <div className="flex items-center text-lg">
            <i className="fas fa-envelope mr-3 text-blue-300"></i>
            <p>info@a360s.com</p>
          </div>
          <div className="flex items-center text-lg">
            <i className="fas fa-phone mr-3 text-blue-300"></i>
            <p>+1 (703) 644-8000</p>
          </div>
          <div className="flex items-center text-lg">
            <i className="fas fa-map-marker-alt mr-3 text-blue-300"></i>
            <p>46164 Westlake Dr. #650422 Sterling, VA 20165-9998</p>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href="#"
            className="text-white bg-blue-800 p-3 rounded-full hover:bg-blue-600 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-white bg-blue-800 p-3 rounded-full hover:bg-blue-600 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-white bg-blue-800 p-3 rounded-full hover:bg-blue-600 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="flex-1 bg-white text-gray-700 rounded-lg p-8 flex flex-col">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Contact Us</h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded outline-none text-base text-gray-700 placeholder-gray-400"
          />
          <input
            type="tel"
            placeholder="Phone No"
            className="p-3 border border-gray-300 rounded outline-none text-base text-gray-700 placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded outline-none text-base text-gray-700 placeholder-gray-400"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded outline-none text-base text-gray-700 placeholder-gray-400 resize-none h-32"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-3 bg-blue-800 text-white font-bold rounded hover:bg-blue-600 transition flex items-center justify-center gap-2"
          >
            <i className="fas fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
