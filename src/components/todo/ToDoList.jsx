/* eslint-disable react/prop-types */
import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos, onDelete, onUpdate }) => {
	const fazerTasks = toDos.filter((toDo) => toDo.status === "a fazer");
	const fazendoTasks = toDos.filter((toDo) => toDo.status === "fazendo");
	const feitaTasks = toDos.filter((toDo) => toDo.status === "feita");

	return (
		<div className="display-flex gap-20">
			<div className="flex-1 border-radius-10 text-align-center display-flex flex-direction-column background-red">
				<h2 className="margin-bottom-5">A Fazer</h2>
				<ul className="list-style-none padding-0">
					{fazerTasks.map((toDo) => (
						<ToDoItem
							key={toDo.id}
							toDo={toDo}
							onDelete={onDelete}
							onUpdate={onUpdate}
						/>
					))}
				</ul>
			</div>

			<div className="flex-1 border-radius-10 text-align-center display-flex flex-direction-column background-yellow">
				<h2 className="margin-bottom-5">Fazendo</h2>
				<ul className="list-style-none padding-0">
					{fazendoTasks.map((toDo) => (
						<ToDoItem
							key={toDo.id}
							toDo={toDo}
							onDelete={onDelete}
							onUpdate={onUpdate}
						/>
					))}
				</ul>
			</div>

			<div className="flex-1 border-radius-10 text-align-center display-flex flex-direction-column background-green">
				<h2 className="margin-bottom-5">Feitas</h2>
				<ul className="list-style-none padding-0">
					{feitaTasks.map((toDo) => (
						<ToDoItem
							key={toDo.id}
							toDo={toDo}
							onDelete={onDelete}
							onUpdate={onUpdate}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ToDoList;
