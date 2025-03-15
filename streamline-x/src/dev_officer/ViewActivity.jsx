import React from 'react';

import '../CommonStyling.css';
import './DevOfficerStyling.css';
import './ViewActivity.css';

const ViewActivity = ({ activity, onBack }) => {
  // Handle null activity case with a loading state
  if (!activity) {
    return (
      <div className="view-activity-container">
        <div className="content">
          <div className="back-button-container">
            <button className="back-button" onClick={onBack}>
              ← Back
            </button>
          </div>
          <h1>Loading activity details...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="view-activity-container">
      
      <div className="main-content">
        
        <div className="content">
          <div className="back-button-container">
            <button className="back-button" onClick={onBack}>
              ← Back
            </button>
          </div>

          <div className="activity-details-card">
            <div className="activity-header">
              <h1>Activity ID: {activity.id}</h1>
              <div className="activity-status-row">
                <div className="status-item">
                  <label>Approval Status</label>
                  <div className="status-value">
                    {activity.approvalStatus || "Pending"}
                  </div>
                </div>
                <div className="status-item">
                  <label>Assigned To</label>
                  <div className="status-value">
                    {activity.assignedTo || "S.E. Smith"}
                  </div>
                </div>
              </div>
            </div>

            <div className="activity-detail-row">
              <div className="detail-label">Activity Description:</div>
              <div className="detail-value">{activity.description || "Roof Construction of ABC M.V."}</div>
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

            <div className="activity-detail-row">
              <div className="detail-label">Priority:</div>
              <div className="detail-value">{activity.priority || "1"}</div>
            </div>

            <div className="activity-detail-row">
              <div className="detail-label">Status:</div>
              <div className="detail-value">{activity.status || "On - Progress"}</div>
            </div>

            <div className="activity-detail-row">
              <div className="detail-label">Site Images:</div>
              <div className="detail-value image-gallery">
                <div className="image-placeholder"></div>
                <div className="image-placeholder"></div>
                <div className="image-placeholder"></div>
              </div>
            </div>

            <div className="action-buttons">
              <button className="delete-button">Delete</button>
              <button className="edit-button">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewActivity;