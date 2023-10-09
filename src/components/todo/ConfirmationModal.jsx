import React from 'react';
import Button from '../common/Button';

const ConfirmationModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{message}</p>
        <div>
          <Button onClick={onCancel} label="Não" />
          <Button onClick={onConfirm} label="Sim" />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
