import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ toDos, onDelete, onUpdate }) => {
  const fazerTasks = toDos.filter((toDo) => toDo.status === 'a fazer');
  const fazendoTasks = toDos.filter((toDo) => toDo.status === 'fazendo');
  const feitaTasks = toDos.filter((toDo) => toDo.status === 'feita');

  return (
    <div>
      <h2>A Fazer</h2>
      <ul>
        {fazerTasks.map((toDo) => (
          <ToDoItem
            key={toDo.id}
            toDo={toDo}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>

      <h2>Fazendo</h2>
      <ul>
        {fazendoTasks.map((toDo) => (
          <ToDoItem
            key={toDo.id}
            toDo={toDo}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>

      <h2>Feitas</h2>
      <ul>
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
  );
};

export default ToDoList;
