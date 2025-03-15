import React, { useState } from 'react';
import './BudgetUpdate.css';

// Icons
const BackIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M20,11H7.83l5.59-5.59L12,4l-8,8l8,8l1.41-1.41L7.83,13H20V11z"/>
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
      
      <div className="main-content">
        
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