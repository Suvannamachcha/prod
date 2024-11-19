// /frontend/src/pages/Dashboard.jsx
import React from 'react';
import FileManager from '../components/FileManager';
import CalendarPage from '../components/Calendar';
import Reminders from '../components/Reminders';
import ProductivityTracker from '../components/ProductivityTracker';
import Micromanager from '../components/Micromanager';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <FileManager />
      <CalendarPage />
      <Reminders />
      <ProductivityTracker />
      <Micromanager />
    </div>
  );
};

export default Dashboard;
