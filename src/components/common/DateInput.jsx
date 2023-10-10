/* eslint-disable react/prop-types */
import React from "react";

const DateInput = ({ name, value, onChange }) => {
	return (
		<input
			type="date"
			name={name}
			value={value}
			onChange={onChange}
			className="font-16 width-60 margin-5 border-radius-5 padding-10"
		/>
	);
};

export default DateInput;
