import React, { useState } from 'react';
import Input from '../common/Input';
import DateInput from '../common/DateInput';
import Button from '../common/Button';

const ToDoForm = ({ onAdd }) => {
  const [newToDo, setNewToDo] = useState({
    title: '',
    description: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewToDo({ ...newToDo, [name]: value });
  };

  const handleAdd = () => {
    onAdd(newToDo);
    setNewToDo({ title: '', description: '', date: '' });
  };

  return (
    <div>
      <label htmlFor="title">Título:</label>
      <Input
        name="title"
        placeholder="Título"
        value={newToDo.title}
        onChange={handleChange}
      />

      <label htmlFor="description">Descrição:</label>
      <Input
        name="description"
        placeholder="Descrição"
        value={newToDo.description}
        onChange={handleChange}
      />

      <label htmlFor="date">Data de Conclusão:</label>
      <DateInput
        name="date"
        value={newToDo.date}
        onChange={handleChange}
      />

      <Button onClick={handleAdd} label="Adicionar Tarefa" />
    </div>
  );
};

export default ToDoForm;
