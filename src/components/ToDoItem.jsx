import React, { useState } from 'react';

const ToDoItem = ({ toDo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedToDo, setEditedToDo] = useState(toDo);

  const handleDelete = () => {
    onDelete(toDo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(editedToDo);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedToDo.title}
            onChange={(e) => setEditedToDo({ ...editedToDo, title: e.target.value })}
          />
          <input
            type="text"
            value={editedToDo.description}
            onChange={(e) => setEditedToDo({ ...editedToDo, description: e.target.value })}
          />
          <input
            type="date"
            value={editedToDo.date}
            onChange={(e) => setEditedToDo({ ...editedToDo, date: e.target.value })}
          />
          <button onClick={handleSave}>Salvar</button>
        </>
      ) : (
        <>
          <span>{toDo.title}</span>
          <span>{toDo.description}</span>
          <span>{toDo.date}</span>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Excluir</button>
        </>
      )}
    </li>
  );
};

export default ToDoItem;
