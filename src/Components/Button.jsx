import React from "react";

function Button({ type = "button", disabled = false, variant = "primary", children, ...props }) {
  const baseClasses =
    "w-full py-4 px-6 rounded-lg font-semibold transition-colors";

  const variants = {
    primary: disabled
      ? "bg-primaryLight text-gray-400 cursor-not-allowed"
      : "bg-primary text-white hover:bg-primaryDark",
    secondary: disabled
      ? "bg-grayCustom text-gray-400 cursor-not-allowed"
      : "bg-primaryLight text-textDark hover:bg-primary",
    gray: disabled
      ? "bg-grayCustom text-gray-400 cursor-not-allowed"
      : "bg-grayCustom text-white hover:bg-primary",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}


export default Button;
