// /frontend/src/components/Reminders.jsx
import React, { useState } from 'react';

const Reminders = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');

  const addReminder = () => {
    const remindAt = prompt('Enter reminder time (YYYY-MM-DD HH:mm):');
    if (newReminder && remindAt) {
      setReminders([
        ...reminders,
        { text: newReminder, remindAt: new Date(remindAt) },
      ]);
      setNewReminder('');
    }
  };

  const deleteReminder = (index) => {
    setReminders(reminders.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Reminders</h1>
      <input
        type="text"
        value={newReminder}
        onChange={(e) => setNewReminder(e.target.value)}
        placeholder="Enter reminder"
      />
      <button onClick={addReminder}>Add Reminder</button>
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>
            {reminder.text} at {reminder.remindAt.toLocaleString()}
            <button onClick={() => deleteReminder(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reminders;
