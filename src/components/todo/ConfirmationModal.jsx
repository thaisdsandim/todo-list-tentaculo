/* eslint-disable react/prop-types */
import React from "react";
import Button from "../common/Button";

const ConfirmationModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
	if (!isOpen) return null;

	return (
		<div className="position-fixed top-50p left-50p background-white padding-20 box-shadow z-index-1000 transform-translate-50-50 border-radius-5">
			<div>
				<h2>{title}</h2>
				<p>{message}</p>
				<div>
					<Button onClick={onCancel} label="Não" />
					<Button onClick={onConfirm} label="Sim" />
				</div>
			</div>
		</div>
	);
};

export default ConfirmationModal;
