import React, { useState, useEffect } from "react";
import ToDoList from "./todo/ToDoList";
import ToDoForm from "./todo/ToDoForm";
import ToDoCalendar from "./todo/ToDoCalendar";
import Button from "./common/Button";

function ToDoView() {
	const [toDos, setToDos] = useState([]);
	const [view, setView] = useState("list");

	useEffect(() => {
		const storedToDos = localStorage.getItem("toDos");
		if (storedToDos) {
			setToDos(JSON.parse(storedToDos));
		}
	}, []);

	const addToDo = (newToDo) => {
		const updatedToDos = [...toDos, { ...newToDo, id: Date.now(), status: "a fazer" }];
		setToDos(updatedToDos);
		localStorage.setItem("toDos", JSON.stringify(updatedToDos));
	};

	const updateToDo = (updatedToDo) => {
		const updatedToDos = toDos.map((toDo) =>
			toDo.id === updatedToDo.id ? updatedToDo : toDo
		);
		setToDos(updatedToDos);
		localStorage.setItem("toDos", JSON.stringify(updatedToDos));
	};

	const deleteToDo = (toDoId) => {
		const updatedToDos = toDos.filter((toDo) => toDo.id !== toDoId);
		setToDos(updatedToDos);
		localStorage.setItem("toDos", JSON.stringify(updatedToDos));
	};

	return (
		<div>
			<h1>Lista de Tarefas</h1>
			<ToDoForm onAdd={addToDo} />
			<div className="margin-top-20 margin-bottom-20">
				<Button onClick={() => setView("list")} label="Visualizar Lista" />
				<Button onClick={() => setView("calendar")} label="Visualizar Calendário" />
			</div>
			{view === "list" ? (
				<ToDoList toDos={toDos} onDelete={deleteToDo} onUpdate={updateToDo} />
			) : (
				<ToDoCalendar toDos={toDos} onDelete={deleteToDo} onUpdate={updateToDo}  />
			)}
		</div>
	);
}

export default ToDoView;
