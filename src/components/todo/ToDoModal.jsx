import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import DateInput from '../common/DateInput';
import ConfirmationModal from './ConfirmationModal';

const ToDoModal = ({ toDo, onClose, onUpdate, onDelete }) => {
  const [editedToDo, setEditedToDo] = useState(toDo);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    onUpdate(editedToDo);
    setIsEditing(false);
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
    <div>
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

          <Button onClick={handleCancel} label="Cancelar" />
          <Button onClick={handleSave} label="Salvar" />
        </>
      ) : (
        <>
          <h2>{toDo.title}</h2>
          <p>{toDo.description}</p>
          <p>{toDo.date}</p>
          <p>{toDo.status}</p>
          
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
