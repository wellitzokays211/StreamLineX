import React, { useState, useEffect } from 'react';
import './PriorityList.css';
import DevelopmentPlan from './DevelopmentPlan'; // Import the new component

// You can reuse the same icon components from Dashboard.jsx or import them
const BackIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M20,11H7.83l5.59-5.59L12,4l-8,8l8,8l1.41-1.41L7.83,13H20V11z"/>
  </svg>
);

const NotificationIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12,22c1.1,0,2-0.9,2-2h-4C10,21.1,10.9,22,12,22z M18,16v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-0.83-0.67-1.5-1.5-1.5S10.5,3.17,10.5,4v0.68C7.64,5.36,6,7.92,6,11v5l-2,2v1h16v-1L18,16z"/>
  </svg>
);

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18,14H6v-2h12V14z M18,11H6V9h12V11z M18,8H6V6h12V8z"/>
  </svg>
);

const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,5c1.66,0,3,1.34,3,3s-1.34,3-3,3s-3-1.34-3-3S10.34,5,12,5z M12,19.2c-2.5,0-4.71-1.28-6-3.22c0.03-1.99,4-3.08,6-3.08c1.99,0,5.97,1.09,6,3.08C16.71,17.92,14.5,19.2,12,19.2z"/>
  </svg>
);

const PriorityList = ({ onBack, currentBudget }) => {
  // State to control whether to show the development plan
  const [showDevelopmentPlan, setShowDevelopmentPlan] = useState(false);
  
  // Sample activities data (in a real app, this would come from an API or props)
  const [activities, setActivities] = useState([
    { id: 'AC001', description: 'Roof Construction of ABC M.V.', district: 'Kandy', budget: 550000.00, selected: false },
    { id: 'AC004', description: 'Wall Construction of XYZ M.V.', district: 'Matale', budget: 420000.00, selected: false },
    { id: 'AC007', description: 'Bathroom Renovation at EFG School', district: 'Colombo', budget: 380000.00, selected: false },
    { id: 'AC012', description: 'Computer Lab Installation at HIJ College', district: 'Galle', budget: 650000.00, selected: false },
    { id: 'AC019', description: 'Playground Development at KLM Institute', district: 'Kandy', budget: 480000.00, selected: false }
  ]);

  // State for tracking the total budget of selected activities
  const [selectedBudget, setSelectedBudget] = useState(0);
  
  // State for error message
  const [errorMessage, setErrorMessage] = useState('');

  // Calculate selected budget whenever activities change
  useEffect(() => {
    const totalSelected = activities
      .filter(activity => activity.selected)
      .reduce((sum, activity) => sum + activity.budget, 0);
    
    setSelectedBudget(totalSelected);
  }, [activities]);

  // Handle checkbox selection
  const handleSelect = (id) => {
    setActivities(activities.map(activity => 
      activity.id === id 
        ? { ...activity, selected: !activity.selected } 
        : activity
    ));
    setErrorMessage('');
  };
  
  // Handle Generate Plan button click
  const handleGeneratePlan = () => {
    const selectedItems = activities.filter(activity => activity.selected);
    
    if (selectedItems.length === 0) {
      setErrorMessage('Please select at least one activity.');
      return;
    }
    
    if (selectedBudget > currentBudget) {
      setErrorMessage('Your selected budget exceeds the estimated annual budget. Please adjust your selection.');
      return;
    }
    
    setShowDevelopmentPlan(true);
  };
  
  // Go back to priority list from development plan
  const handleBackFromPlan = () => {
    setShowDevelopmentPlan(false);
  };
  
  // Render development plan if showDevelopmentPlan is true
  if (showDevelopmentPlan) {
    return (
      <DevelopmentPlan 
        onBack={handleBackFromPlan}
        selectedActivities={activities.filter(activity => activity.selected)}
        currentBudget={currentBudget}
        selectedBudget={selectedBudget}
      />
    );
  }

  return (
    <div className="priority-list-container">
      <div className="sidebar">
        <div className="logo">StreamLineX</div>
      </div>
      
      <div className="main-content">
        <div className="header">
          <div className="notification-icon">
            <NotificationIcon />
          </div>
          <div className="message-icon">
            <MessageIcon />
          </div>
          <div className="profile">
            <ProfileIcon />
            <span>D.O. Peter</span>
          </div>
        </div>
        
        <div className="content">
          <div className="back-button" onClick={onBack}>
            <BackIcon />
            <span>Back</span>
          </div>
          
          <h1>View Priority List</h1>
          
          {errorMessage && (
            <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
              {errorMessage}
            </div>
          )}
          
          <div className="priority-table-container">
            <table className="priority-table">
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Activity ID</th>
                  <th>Activity Description</th>
                  <th>District</th>
                  <th>Budget Allocated</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {activities.map(activity => (
                  <tr key={activity.id}>
                    <td>
                      <input 
                        type="checkbox" 
                        checked={activity.selected}
                        onChange={() => handleSelect(activity.id)}
                      />
                    </td>
                    <td>{activity.id}</td>
                    <td>{activity.description}</td>
                    <td>{activity.district}</td>
                    <td>Rs. {activity.budget.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td>
                      <button className="view-button">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="budget-summary">
            <div className="budget-card estimated">
              <div className="budget-label">Estimated Annual Budget</div>
              <div className="budget-value">Rs. {currentBudget.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>
            
            <div className="budget-card your-budget">
              <div className="budget-label">Your Budget</div>
              <div className="budget-value">Rs. {selectedBudget.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </div>
            
            <button 
              className="generate-plan-button"
              onClick={handleGeneratePlan}
            >
              Generate Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriorityList;