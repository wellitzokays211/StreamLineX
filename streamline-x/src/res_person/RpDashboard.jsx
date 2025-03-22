import React from 'react';
import '../CommonStyling.css';
import './ResponsiblePersonStyling.css';

const RpDashboard = ({ onBack }) => {
  return (
    <div className="dashboard-container">
      <h1>Responsible Person Dashboard</h1>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>My Assigned Activities</h2>
          <p>View and update your assigned activities</p>
          <button className="btn-primary">View Activities</button>
        </div>
        
        <div className="dashboard-card">
          <h2>Progress Reports</h2>
          <p>Submit progress reports for your activities</p>
          <button className="btn-primary">Submit Report</button>
        </div>

        <div className="dashboard-card">
          <h2>Activity Calendar</h2>
          <p>View upcoming deadlines and milestones</p>
          <button className="btn-primary">View Calendar</button>
        </div>
      </div>
      
      <button onClick={onBack} className="btn-secondary back-button">
        Back to Role Selection
      </button>
    </div>
  );
};

export default RpDashboard;