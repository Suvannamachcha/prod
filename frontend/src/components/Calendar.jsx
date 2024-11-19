// /frontend/src/components/Calendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const addEvent = () => {
    const label = prompt('Enter label for this date:');
    if (label) {
      setEvents([...events, { date: date.toISOString(), label }]);
    }
  };

  return (
    <div>
      <h1>Calendar</h1>
      <Calendar onChange={setDate} value={date} />
      <button onClick={addEvent}>Add Event</button>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {new Date(event.date).toDateString()} - {event.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPage;
