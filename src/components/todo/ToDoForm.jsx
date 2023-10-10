/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Input from "../common/Input";
import DateInput from "../common/DateInput";
import Button from "../common/Button";
import Alert from "../common/Alert";

const ToDoForm = ({ onAdd }) => {
	const [showAlert, setShowAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");

	const [newToDo, setNewToDo] = useState({
		title: "",
		description: "",
		date: "",
	});

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewToDo({ ...newToDo, [name]: value });
	};

	const handleAdd = () => {
		if (newToDo.title.trim() === "") {
			setShowAlert(true);
			setAlertMessage("Título da tarefa não pode ficar em branco!");
		} else {
			onAdd(newToDo);
			setNewToDo({ title: "", description: "", date: "" });
			closeAndResetModal();
			setShowAlert(true);
			setAlertMessage("Tarefa editada com sucesso!");
			setTimeout(() => {
				setShowAlert(false);
			}, 1000);
		}
	};  

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const closeAndResetModal = () => {
		closeModal();
		setNewToDo({ title: "", description: "", date: "" });
	};

	return (
		<div>
			{showAlert && <Alert message={alertMessage} onClose={() => setShowAlert(false)} />}
			<Button onClick={openModal} label="Adicionar Tarefa" />
			{isModalOpen && (
				<div className="min-width-70-vh position-fixed top-50p left-50p background-white padding-20 box-shadow z-index-1000 transform-translate-50-50 border-radius-5 background-white">
					<h2>Adicionar Tarefa</h2>
					<div className="margin-bottom-20">
						<label htmlFor="title">Título:</label>
						<Input
							name="title"
							placeholder="Título"
							value={newToDo.title}
							onChange={handleChange}
						/>
						<br />
						<label htmlFor="description">Descrição:</label>
						<Input
							name="description"
							placeholder="Descrição"
							value={newToDo.description}
							onChange={handleChange}
						/>
						<br />
						<label htmlFor="date">Data de Conclusão:</label>
						<DateInput name="date" value={newToDo.date} onChange={handleChange} />
					</div>
					<Button onClick={handleAdd} label="Adicionar Tarefa" />
					<Button onClick={closeModal} label="Fechar" />
				</div>
			)}
		</div>
	);
};

export default ToDoForm;
