import React, { useState } from 'react';
import './BudgetUpdate.css';

// Icons
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

const BudgetUpdate = ({ onBack, currentBudget, onUpdateBudget }) => {
  const [newBudget, setNewBudget] = useState(currentBudget);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateBudget(newBudget);
  };

  return (
    <div className="budget-update-container">
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
          <div className="back-nav">
            <button className="back-button" onClick={onBack}>
              <BackIcon />
              <span>Back</span>
            </button>
          </div>
          
          <div className="budget-update-card">
            <form className="budget-update-form" onSubmit={handleSubmit}>
              <h2>Update Budget</h2>
              <h3>Current Budget</h3>
              <div className="current-budget">
                Rs. {currentBudget.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              
              <div className="form-group">
                <label htmlFor="newBudget">Enter New Budget</label>
                <div className="input-group">
                  <span className="input-prefix">Rs.</span>
                  <input 
                    type="number" 
                    id="newBudget"
                    className="budget-input"
                    value={newBudget}
                    onChange={(e) => setNewBudget(e.target.value)}
                    step="0.01"
                    min="0"
                    required
                  />
                </div>
              </div>
              
              <div className="form-actions">
                <button type="submit" className="submit-button">Update Budget</button>
                <button type="button" className="cancel-button" onClick={onBack}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetUpdate;