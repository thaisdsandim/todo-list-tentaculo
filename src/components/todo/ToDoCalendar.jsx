import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import ToDoModal from './ToDoModal';

const ToDoCalendar = ({ toDos, onUpdate, onDelete }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events = toDos.map((toDo) => ({
    id: toDo.id,
    title: toDo.title,
    date: toDo.date,
  }));

  const handleEventClick = (eventClickInfo) => {
    const clickedTask = toDos.find((toDo) => toDo.title === eventClickInfo.event.title);

    if (clickedTask) {
      setSelectedTask(clickedTask);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="todo-calendar">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        locale={ptBrLocale}
        eventClick={handleEventClick}
      />

      {isModalOpen && (
        <ToDoModal
          toDo={selectedTask}
          onClose={() => setIsModalOpen(false)}
          onUpdate={onUpdate}
          onDelete={() => onDelete(selectedTask.id)}
        />
      )}
    </div>
  );
};

export default ToDoCalendar;
