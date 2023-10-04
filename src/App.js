import React, { useState, useEffect } from 'react';
import ToDoList from './components/todo/ToDoList';
import ToDoForm from './components/todo/ToDoForm';

function App() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const storedToDos = localStorage.getItem('toDos');
    if (storedToDos) {
      setToDos(JSON.parse(storedToDos));
    }
  }, []);

  const addToDo = (newToDo) => {
    const updatedToDos = [...toDos, { ...newToDo, id: Date.now() }];
    setToDos(updatedToDos);
    localStorage.setItem('toDos', JSON.stringify(updatedToDos));
  };

  const updateToDo = (updatedToDo) => {
    const updatedToDos = toDos.map((toDo) =>
      toDo.id === updatedToDo.id ? updatedToDo : toDo
    );
    setToDos(updatedToDos);
    localStorage.setItem('toDos', JSON.stringify(updatedToDos));
  };

  const deleteToDo = (toDoId) => {
    const updatedToDos = toDos.filter((toDo) => toDo.id !== toDoId);
    setToDos(updatedToDos);
    localStorage.setItem('toDos', JSON.stringify(updatedToDos));
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <ToDoForm onAdd={addToDo} />
      <ToDoList toDos={toDos} onDelete={deleteToDo} onUpdate={updateToDo} />
    </div>
  );
}

export default App;
