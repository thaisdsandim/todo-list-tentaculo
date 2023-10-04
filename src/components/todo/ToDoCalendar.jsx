import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

const ToDoCalendar = ({ toDos }) => {
  const events = toDos.map((toDo) => ({
    title: toDo.title,
    date: toDo.date,
  }));

  return (
    <div className="todo-calendar">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        locale={ptBrLocale}
      />
    </div>
  );
};

export default ToDoCalendar;