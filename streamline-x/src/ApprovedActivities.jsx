import React from 'react';

import './CommonStyling.css';
import './DevOfficerStyling.css';
import './ApprovedActivities.css';

const BackIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M20,11H7.83l5.59-5.59L12,4l-8,8l8,8l1.41-1.41L7.83,13H20V11z"/>
    </svg>
  );

const ApprovedActivities = ({ onBack, onViewActivity }) => {
  // Sample data for approved activities
  const approvedActivities = [
    { id: 'AC001', description: 'Roof Construction of ABC M.V.', district: 'Kandy' },
    { id: 'AC004', description: 'Wall Construction of XYZ M.V.', district: 'Matale' }
  ];

  return (
    <div className="approved-activities-container">
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
          <div className="profile">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,5c1.66,0,3,1.34,3,3s-1.34,3-3,3s-3-1.34-3-3S10.34,5,12,5z M12,19.2c-2.5,0-4.71-1.28-6-3.22c0.03-1.99,4-3.08,6-3.08c1.99,0,5.97,1.09,6,3.08C16.71,17.92,14.5,19.2,12,19.2z"/>
            </svg>
            <span>D.O. Peter</span>
          </div>
        </div>
        
        <div className="content">
            <div className="back-button" onClick={onBack}>
                <BackIcon />
                <span>Back</span>
            </div>
            
            <h1>Approved Activities</h1>
          <div></div>

          <div className="approved-activities-table-container">
            <table className="approved-activities-table">
                <thead>
                <tr>
                    <th>Activity ID</th>
                    <th>Activity Description</th>
                    <th>District</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {approvedActivities.map((activity) => (
                    <tr key={activity.id}>
                    <td>{activity.id}</td>
                    <td>{activity.description}</td>
                    <td>{activity.district}</td>
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
    </div>
  );
};

export default ApprovedActivities;