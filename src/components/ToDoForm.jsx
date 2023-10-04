import React, { useState } from 'react';

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
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={newToDo.title}
        onChange={handleChange}
      />
      <label htmlFor="description">Descrição:</label>
      <input
        type="text"
        name="description"
        placeholder="Descrição"
        value={newToDo.description}
        onChange={handleChange}
      />
      <label htmlFor="date">Data de Conclusão:</label>
      <input
        type="date"
        name="date"
        value={newToDo.date}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Adicionar Tarefa</button>
    </div>
  );
};

export default ToDoForm;
