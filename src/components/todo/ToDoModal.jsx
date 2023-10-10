/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import DateInput from "../common/DateInput";
import ConfirmationModal from "./ConfirmationModal";
import Alert from "../common/Alert";

const ToDoModal = ({ toDo, onClose, onUpdate, onDelete }) => {
	const [editedToDo, setEditedToDo] = useState(toDo);
	const [isEditing, setIsEditing] = useState(false);
	const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");

	const formatDate = (date) => {
		const options = { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC" };
		return new Date(date).toLocaleDateString("pt-BR", options);
	};

	const statusOptions = ["a fazer", "fazendo", "feito"];

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleCancel = () => {
		setIsEditing(false);
	};

	const handleSave = () => {
		if (editedToDo.title.trim() === "") {
			setShowAlert(true);
			setAlertMessage("Título da tarefa não pode ficar em branco!");
		} else {
			onUpdate(editedToDo);
			setIsEditing(false);
			setShowAlert(true);
			setAlertMessage("Tarefa editada com sucesso!");
			setTimeout(() => {
				setShowAlert(false);
			}, 1000);
		}
	};

	const handleDelete = () => {
		setShowDeleteConfirmation(true);
	};

	const handleConfirmDelete = () => {
		onDelete();
		onClose();
	};

	const handleCancelDelete = () => {
		setShowDeleteConfirmation(false);
	};

	return (
		<div className="text-align-center position-fixed top-50p left-50p background-white padding-20 box-shadow z-index-1000 transform-translate-50-50 border-radius-5">
			{showAlert && <Alert message={alertMessage} onClose={() => setShowAlert(false)} />}
			{isEditing ? (
				<>
					<Input
						name="title"
						placeholder="Título"
						value={editedToDo.title}
						onChange={(e) => setEditedToDo({ ...editedToDo, title: e.target.value })}
					/>
					<br/>
					<DateInput
						name="date"
						value={editedToDo.date}
						onChange={(e) => setEditedToDo({ ...editedToDo, date: e.target.value })}
					/>
					<br/>
					<Input
						name="description"
						placeholder="Descrição"
						value={editedToDo.description}
						onChange={(e) => setEditedToDo({ ...editedToDo, description: e.target.value })}
					/>
					<br/>
					<select
						name="status"
						value={editedToDo.status}
						onChange={(e) => setEditedToDo({ ...editedToDo, status: e.target.value })}
						className="font-16 width-60 margin-5 border-radius-5 padding-10"
					>
						{statusOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
					<br/>
					<Button onClick={handleCancel} label="Cancelar" />
					<Button onClick={handleSave} label="Salvar" />
				</>
			) : (
				<>
					<h2>{toDo.title}</h2>
					<span className="display-block font-18">{formatDate(toDo.date)} - {toDo.status}</span>
					<p>{toDo.description}</p>
          
					<Button onClick={handleEdit} label="Editar" />
					<Button onClick={handleDelete} label="Excluir" />
					<Button onClick={onClose} label="Fechar" />
				</>
			)}

			<ConfirmationModal
				isOpen={showDeleteConfirmation}
				title="Confirmação de Exclusão"
				message={`Tem certeza que deseja excluir a tarefa "${toDo.title}"?`}
				onConfirm={handleConfirmDelete}
				onCancel={handleCancelDelete}
			/>
		</div>
	);
};

export default ToDoModal;
