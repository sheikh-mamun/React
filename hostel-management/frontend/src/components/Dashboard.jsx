import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ margin: '50px' }}>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/manage-rooms">Manage Rooms</Link></li>
        <li><Link to="/manage-bookings">Manage Bookings</Link></li>
        <li><Link to="/manage-students">Manage Students</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
