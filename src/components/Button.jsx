import React from "react";

const Button = ({ color, bgColor, text, size, borderRadius }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
