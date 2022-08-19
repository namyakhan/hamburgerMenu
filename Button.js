import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-blue-700 text-white font-sora py-2 px-6 rounded md:ml-8 hover:bg-blue-900 
    duration-500"
    >
      {props.children}
    </button>
  );
};

export default Button;
