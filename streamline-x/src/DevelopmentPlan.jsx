import React, { useState } from 'react';
import './PriorityList.css'; // Reusing existing styles

// You can reuse the same icon components
const BackIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M20,11H7.83l5.59-5.59L12,4l-8,8l8,8l1.41-1.41L7.83,13H20V11z"/>
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M6,19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V7H6V19z M19,4h-3.5l-1-1h-5l-1,1H5v2h14V4z"/>
  </svg>
);

const StatusIcon = ({ status }) => {
  if (status === "Approved") {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#4CAF50">
        <path d="M9,16.17L4.83,12l-1.42,1.41L9,19L21,7l-1.41-1.41L9,16.17z"/>
      </svg>
    );
  } else if (status === "Sent for approval") {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#FFC107">
        <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"/>
      </svg>
    );
  } else {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#9E9E9E">
        <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"/>
      </svg>
    );
  }
};

const DevelopmentPlan = ({ onBack, selectedActivities, currentBudget, selectedBudget }) => {
  const [planActivities, setPlanActivities] = useState(selectedActivities);
  const [approvalStatus, setApprovalStatus] = useState("Not sent for approval");
  
  // Handle removing an activity from the plan
  const handleRemoveActivity = (id) => {
    setPlanActivities(planActivities.filter(activity => activity.id !== id));
    // Reset approval status if plan is modified
    setApprovalStatus("Not sent for approval");
  };
  
  // Calculate total budget of current plan activities
  const calculateTotalBudget = () => {
    return planActivities.reduce((sum, activity) => sum + activity.budget, 0);
  };
  
  // Handle submit for approval
  const handleSubmitForApproval = () => {
    setApprovalStatus("Sent for approval");
    // In a real application, you would make an API call here
  };
  
  // Get status color for styling
  const getStatusColor = () => {
    switch(approvalStatus) {
      case "Approved":
        return "#4CAF50"; // Green
      case "Sent for approval":
        return "#FFC107"; // Amber
      default:
        return "#9E9E9E"; // Gray
    }
  };
  
  return (
    <div className="priority-list-container">
      <div className="sidebar">
        <div className="logo">StreamLineX</div>
      </div>
      
      <div className="main-content">
        <div className="header">
          <div className="notification-icon">
            {/* Notification Icon */}
          </div>
          <div className="message-icon">
            {/* Message Icon */}
          </div>
          <div className="profile">
            {/* Profile Icon */}
            <span>D.O. Peter</span>
          </div>
        </div>
        
        <div className="content">
          <div className="back-button" onClick={onBack}>
            <BackIcon />
            <span>Back</span>
          </div>
          
          <div className="plan-header">
            <h1>View Development Plan</h1>
            <div className="approval-status" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '8px 16px',
              backgroundColor: `${getStatusColor()}20`,
              border: `1px solid ${getStatusColor()}`,
              borderRadius: '4px',
              color: getStatusColor(),
              marginLeft: '20px'
            }}>
              <StatusIcon status={approvalStatus} />
              <span style={{ marginLeft: '8px', fontWeight: 'bold' }}>{approvalStatus}</span>
            </div>
          </div>
          
          <div className="priority-table-container">
            <table className="priority-table">
              <thead>
                <tr>
                  <th>Activity ID</th>
                  <th>Activity Description</th>
                  <th>District</th>
                  <th>Budget Allocated</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {planActivities.length > 0 ? (
                  planActivities.map(activity => (
                    <tr key={activity.id}>
                      <td>{activity.id}</td>
                      <td>{activity.description}</td>
                      <td>{activity.district}</td>
                      <td>Rs. {activity.budget.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      <td>
                        <button 
                          className="delete-button"
                          onClick={() => handleRemoveActivity(activity.id)}
                          disabled={approvalStatus === "Approved"}
                          style={{ 
                            opacity: approvalStatus === "Approved" ? 0.5 : 1,
                            cursor: approvalStatus === "Approved" ? 'not-allowed' : 'pointer'
                          }}
                        >
                          <TrashIcon />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>
                      No activities selected for the development plan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="budget-summary">
            <div className="budget-card estimated">
              <div className="budget-label">Estimated Annual Budget</div>
              <div className="budget-value">Rs. {currentBudget.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>
            
            <div className="budget-card your-budget">
              <div className="budget-label">Development Plan Budget</div>
              <div className="budget-value">Rs. {calculateTotalBudget().toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>
            
            <button 
              className="generate-plan-button" 
              onClick={handleSubmitForApproval}
              disabled={approvalStatus === "Approved" || approvalStatus === "Sent for approval"}
              style={{ 
                opacity: (approvalStatus === "Approved" || approvalStatus === "Sent for approval") ? 0.5 : 1,
                cursor: (approvalStatus === "Approved" || approvalStatus === "Sent for approval") ? 'not-allowed' : 'pointer'
              }}
            >
              {approvalStatus === "Not sent for approval" ? "Submit for Approval" : "Submitted"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentPlan;