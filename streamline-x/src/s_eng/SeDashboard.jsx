import React from 'react';
import { BackButton } from '../Header';
import './SEStyling.css';

const SeDashboard = ({ onBack, onAddActivity, onViewActivity, onViewOnGoingActivities,onViewCompletedActivities, activities = [] }) => {
  // Use provided activities or default to empty array
  const displayActivities = activities.length > 0 ? activities : [
    {
      id: 'AC001',
      title: 'Roof Construction of ABC M.V.',
      date: 'July-02'
    },
    {
      id: 'AC004',
      title: 'Computer Lab Renovation of ABC M.V.',
      date: 'April-24'
    }
  ];

  return (
    <div className="content">
      <h1>Dashboard</h1>
      
      <div className="stats-row">
        <div className="add-activity-card" onClick={onAddActivity}>
          <div className="add-activity-content">
            <span>My Activities</span>
            <div className="add-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12,4.5C7,4.5,2.73,7.61,1,12c1.73,4.39,6,7.5,11,7.5s9.27-3.11,11-7.5C21.27,7.61,17,4.5,12,4.5z M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5S14.76,17,12,17z M12,9c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S13.66,9,12,9z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="stat-card" onClick={onViewOnGoingActivities} style={{cursor: 'pointer'}}>
          <div className="stat-content">
            <div>
              <div className="stat-title">On-Going</div>
              <div className="stat-value">2</div>
            </div>
            <div className="stat-icon on-going-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M10,17l-5-5l1.41-1.41L10,14.17l7.59-7.59L19,8L10,17z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="stat-card" onClick={onViewCompletedActivities} style={{cursor: 'pointer'}}>
          <div className="stat-content">
            <div>
              <div className="stat-title">Completed</div>
              <div className="stat-value">0</div>
            </div>
            <div className="stat-icon completed-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M17,13H7v-2h10V13z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="activities-section">
        <h2>Your Activities</h2>
        <div className="activities-table-container">
          <table className="activities-table">
            <thead>
              <tr>
                <th>Activity ID</th>
                <th>Activity Description</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {displayActivities.map((activity) => (
                <tr key={activity.id}>
                  <td>{activity.id}</td>
                  <td>{activity.title}</td>
                  <td>{activity.date || (activity.startDate ? new Date(activity.startDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit' }) : '')}</td>
                  <td>
                    <button 
                      className="view-button"
                      onClick={() => onViewActivity(activity)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SeDashboard;