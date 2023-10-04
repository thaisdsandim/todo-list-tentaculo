import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import DateInput from '../common/DateInput';

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
          <Input
            name="title"
            placeholder="Título"
            value={editedToDo.title}
            onChange={(e) => setEditedToDo({ ...editedToDo, title: e.target.value })}
          />

          <Input
            name="description"
            placeholder="Descrição"
            value={editedToDo.description}
            onChange={(e) => setEditedToDo({ ...editedToDo, description: e.target.value })}
          />

          <DateInput
            name="date"
            value={editedToDo.date}
            onChange={(e) => setEditedToDo({ ...editedToDo, date: e.target.value })}
          />

          <Button onClick={handleSave} label="Salvar" />
        </>
      ) : (
        <>
          <span>{toDo.title}</span>
          <span>{toDo.description}</span>
          <span>{toDo.date}</span>
          <Button onClick={handleEdit} label="Editar" />
          <Button onClick={handleDelete} label="Excluir" />
        </>
      )}
    </li>
  );
};

export default ToDoItem;
