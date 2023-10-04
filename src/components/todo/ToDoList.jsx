import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ toDos, onDelete, onUpdate }) => {
  return (
    <ul>
      {toDos.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          toDo={toDo}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
