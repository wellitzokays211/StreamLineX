import React, { useState } from 'react';
import './ActivityList.css';

// Back Icon component
const BackIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M20,11H7.83l5.59-5.59L12,4l-8,8l8,8l1.41-1.41L7.83,13H20V11z"/>
  </svg>
);

const ActivityList = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('assigned');
  
  // Sample data - in a real app this would likely come from props or an API
  const activities = [
    { id: 'AC001', description: 'Roof Construction of ABC M.V.', district: 'Kandy', assigned: true },
    { id: 'AC004', description: 'Wall Construction of XYZ M.V.', district: 'Matale', assigned: true },
    { id: 'AC007', description: 'Playground Development of DEF M.V.', district: 'Colombo', assigned: false },
    { id: 'AC010', description: 'Bathroom Renovation of GHI M.V.', district: 'Galle', assigned: false }
  ];

  // Filter activities based on active tab
  const filteredActivities = activities.filter(activity => 
    activeTab === 'assigned' ? activity.assigned : !activity.assigned
  );

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">StreamLineX</div>
      </div>
      
      <div className="main-content">
        <div className="header">
          <div className="notification-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12,22c1.1,0,2-0.9,2-2h-4C10,21.1,10.9,22,12,22z M18,16v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-0.83-0.67-1.5-1.5-1.5S10.5,3.17,10.5,4v0.68C7.64,5.36,6,7.92,6,11v5l-2,2v1h16v-1L18,16z"/>
            </svg>
          </div>
          <div className="message-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18,14H6v-2h12V14z M18,11H6V9h12V11z M18,8H6V6h12V8z"/>
            </svg>
          </div>
          <div className="profile">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,5c1.66,0,3,1.34,3,3s-1.34,3-3,3s-3-1.34-3-3S10.34,5,12,5z M12,19.2c-2.5,0-4.71-1.28-6-3.22c0.03-1.99,4-3.08,6-3.08c1.99,0,5.97,1.09,6,3.08C16.71,17.92,14.5,19.2,12,19.2z"/>
            </svg>
            <span>D.O. Peter</span>
          </div>
        </div>
        
        <div className="content">
          <div className="activity-list-header">
            <button className="back-button" onClick={onBack}>
              <BackIcon />
              <span>Back</span>
            </button>
            <h1>View Activity List</h1>
          </div>
          
          <div className="activity-tabs">
            <button 
              className={`tab-button ${activeTab === 'assigned' ? 'active' : ''}`}
              onClick={() => setActiveTab('assigned')}
            >
              Assigned
            </button>
            <button 
              className={`tab-button ${activeTab === 'unassigned' ? 'active' : ''}`}
              onClick={() => setActiveTab('unassigned')}
            >
              Unassigned
            </button>
          </div>
          
          <div className="activity-table-container">
            <table className="activity-table">
              <thead>
                <tr>
                  <th>Activity ID</th>
                  <th>Activity Description</th>
                  <th>District</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredActivities.map(activity => (
                  <tr key={activity.id}>
                    <td>{activity.id}</td>
                    <td>{activity.description}</td>
                    <td>{activity.district}</td>
                    <td>
                      <button className="view-button">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityList;