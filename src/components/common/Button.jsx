/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ onClick, label }) => {
	return (
		<button 
			onClick={onClick}
			className="background-blue color-white border-none 
      padding-top-10 padding-bottom-10 padding-left-20 
      padding-right-20 margin-5 cursor-pointer border-radius-5 
      font-bold">
			{label}
		</button>
	);
};

export default Button;
