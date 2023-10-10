/* eslint-disable react/prop-types */
import React from "react";

const Alert = ({ message, onClose }) => {
	return (
		<div className="position-fixed top-0 left-0 width-100 height-100 display-flex align-items-center justify-content-center background-semitransparent z-index-9999">
			<div className="background-white padding-20 border-radius-5 box-shadow position-relative">
				<span className="display-block font-20 position-absolute top-5 right-5 cursor-pointer" onClick={onClose}>
          &times;
				</span>
				<p>{message}</p>
			</div>
		</div>
	);
};

export default Alert;
