import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, onClick, variant = "primary", size = "medium", className = "", disabled = false, icon }) => {
  // Define classes based on variant and size
  const baseStyles =
    "rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all";
  const variantStyles = {
    primary: "bg-blue-900 text-white hover:bg-blue-800 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };
  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
     {icon}{label}
    </button>
  );
};

// Define PropTypes for the component
Button.propTypes = {
  label: PropTypes?.node?.isRequired, // The text on the button
  icon: PropTypes?.node, // Icon element
  onClick: PropTypes?.func, // Click handler function
  variant: PropTypes?.oneOf(["primary", "secondary", "danger"]), // Style variant
  size: PropTypes?.oneOf(["small", "medium", "large"]), // Button size
  className: PropTypes?.string, // Additional custom classNames
  disabled: PropTypes?.bool, // Disabled state
};

export default Button;
