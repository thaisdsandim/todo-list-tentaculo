/* eslint-disable react/prop-types */
import React from "react";

const Input = ({ name, placeholder, value, onChange }) => {
	return (
		<input
			type="text"
			name={name}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className="font-16 width-60 margin-5 border-radius-5 padding-10"
		/>
	);
};

export default Input;
