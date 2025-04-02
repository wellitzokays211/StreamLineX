import React from 'react';

import '../CommonStyling.css';
import './SEStyling.css';
import { BackButton } from '../Header'; // Import the reusable BackButton

const SeViewActivity = ({ activity, onBack }) => {
  // Handle null activity case with a loading state
  if (!activity) {
    return (
      <div className="content">
        <BackButton onClick={onBack} text="Back" />
        <h1>Loading activity details...</h1>
      </div>
    );
  }

  return (
    <div className="content">
      {/* Use the reusable BackButton component */}
      <BackButton onClick={onBack} text="Back" />

      <h1 className="activity-title">Activity ID: {activity.id || "001"}</h1>
      
      <div className="activity-details-card">
        <div className="activity-detail-row">
          <div className="detail-label">Activity Description:</div>
          <div className="detail-value">{activity.description || activity.title || "Roof Construction of ABC M.V."}</div>
        </div>

        <div className="activity-detail-row">
          <div className="detail-label">District:</div>
          <div className="detail-value">{activity.district || "Kandy"}</div>
        </div>

        <div className="activity-detail-row">
          <div className="detail-label">Broad Activity Area:</div>
          <div className="detail-value">{activity.broadActivityArea || "Construct School Buildings"}</div>
        </div>

        <div className="activity-detail-row">
          <div className="detail-label">Sub Component:</div>
          <div className="detail-value">{activity.subComponent || "Strengthening education administration and management at provincial, and zonal levels"}</div>
        </div>

        <div className="activity-detail-row">
          <div className="detail-label">Component:</div>
          <div className="detail-value">{activity.component || "Strengthen towards education governance and service delivery of education"}</div>
        </div>
      </div>
      
      {/* Action buttons positioned at the bottom */}
      <div className="action-buttons">
        <button className="btn btn-secondary" onClick={() => console.log('Set Budget')}>Set Budget</button>
        <button className="btn btn-primary" onClick={() => console.log('Set Priority')}>Set Priority</button>
        <button className="btn btn-secondary" onClick={() => console.log('Set Status')}>Set Status</button>
      </div>
    </div>
  );
};

export default SeViewActivity;