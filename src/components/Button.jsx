import React from "react";

const Button = ({ color, bgColor, text, size, borderRadius }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} hover:drop-shadow-xl p-3`}
    >
      {text}
    </button>
  );
};

export default Button;
