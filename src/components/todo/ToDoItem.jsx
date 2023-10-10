/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import DateInput from "../common/DateInput";
import ConfirmationModal from "./ConfirmationModal";
import Alert from "../common/Alert";

const ToDoItem = ({ toDo, onDelete, onUpdate }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedToDo, setEditedToDo] = useState(toDo);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");

	const formatDate = (date) => {
		const options = { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "UTC" };
		return new Date(date).toLocaleDateString("pt-BR", options);
	};

	const handleDelete = () => {
		setIsModalOpen(true);
	};

	const handleConfirmDelete = () => {
		onDelete(toDo.id);
		setIsModalOpen(false);
	};

	const handleCancelDelete = () => {
		setIsModalOpen(false);
	};

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

	const handleStatusUpdate = () => {
		if (toDo.status === "a fazer") {
			const updatedToDo = { ...editedToDo, status: "fazendo" };
			onUpdate(updatedToDo);
		} else if (toDo.status === "fazendo") {
			const updatedToDo = { ...editedToDo, status: "feita" };
			onUpdate(updatedToDo);
		}
	};

	const showArrowButton = toDo.status === "a fazer" || toDo.status === "fazendo";

	return (
		<li className="background-white padding-10 margin-10 border-radius-10 box-shadow">
			{showAlert && <Alert message={alertMessage} onClose={() => setShowAlert(false)} />}
			{isEditing ? (
				<>
					<Input
						name="title"
						placeholder="Título"
						value={editedToDo.title}
						onChange={(e) => setEditedToDo({ ...editedToDo, title: e.target.value })}
					/>
					<DateInput
						name="date"
						value={editedToDo.date}
						onChange={(e) => setEditedToDo({ ...editedToDo, date: e.target.value })}
					/>
					<Input
						name="description"
						placeholder="Descrição"
						value={editedToDo.description}
						onChange={(e) => setEditedToDo({ ...editedToDo, description: e.target.value })}
					/>
					<br />
					<Button onClick={handleCancel} label="Cancelar" />
					<Button onClick={handleSave} label="Salvar" />
				</>
			) : (
				<>
					<span className="display-block font-bold font-18">{toDo.title}</span>
					{toDo.date ? (
						<span className="display-block font-14">{formatDate(toDo.date)}</span>
					) : (
						<span className="display-block font-14">Sem data de conclusão</span>
					)}
					<span className="display-block font-16">{toDo.description}</span>
					<Button onClick={handleEdit} label="✎" />
					<Button onClick={handleDelete} label="✖" />
					{showArrowButton && (
						<Button onClick={handleStatusUpdate} label="➔" />
					)}
				</>
			)}

			<ConfirmationModal
				isOpen={isModalOpen}
				title="Confirmação de Exclusão"
				message={`Tem certeza que deseja excluir a tarefa "${toDo.title}"?`}
				onCancel={handleCancelDelete}
				onConfirm={handleConfirmDelete}
			/>
		</li>
	);
};

export default ToDoItem;
