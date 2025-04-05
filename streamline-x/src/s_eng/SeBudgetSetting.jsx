import React, { useState } from 'react';
import '../CommonStyling.css';
import './SEStyling.css';
import { BackButton } from '../Header';

const SeBudgetSetting = ({ activity, onBack, currentBudget, onSaveBudget }) => {
  const [enteredBudget, setEnteredBudget] = useState('');
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  
  // Format number with commas
  const formatCurrency = (amount) => {
    return parseFloat(amount).toLocaleString('en-IN');
  };

  const handleBudgetChange = (e) => {
    // Only allow numbers and decimal points
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setEnteredBudget(value);
    setError('');
  };

  const handleSubmit = () => {
    const budgetValue = parseFloat(enteredBudget);
    
    // Validate input
    if (!enteredBudget || isNaN(budgetValue)) {
      setError('Please enter a valid budget amount');
      return;
    }
    
    // Check if entered budget exceeds estimated annual budget
    if (budgetValue > currentBudget) {
      setError(`Budget cannot exceed the estimated annual budget (Rs. ${formatCurrency(currentBudget)})`);
      return;
    }
    
    // If validation passes, save budget
    if (onSaveBudget) {
      onSaveBudget(activity.id, budgetValue);
    }
    
    // Show success message
    setSuccessMessage(`Budget of Rs. ${formatCurrency(budgetValue)} has been set for this activity`);
    setShowForm(false);
    
    // Reset form after 2 seconds and go back
    setTimeout(() => {
      onBack();
    }, 2000);
  };

  const handleCancel = () => {
    onBack();
  };

  return (
    <div className="content">
      <BackButton onClick={onBack} text="Back" />
      
      <h1 className="activity-title">Activity ID: {activity?.id || "001"}</h1>
      
      <div className="activity-details-card">
        <div className="activity-detail-row">
          <div className="detail-label">Activity Description:</div>
          <div className="detail-value">{activity?.description || activity?.title || "Roof Construction of ABC M.V."}</div>
        </div>

        <div className="activity-detail-row">
          <div className="detail-label">District:</div>
          <div className="detail-value">{activity?.district || "Kandy"}</div>
        </div>

        <div className="activity-detail-row">
          <div className="detail-label">Broad Activity Area:</div>
          <div className="detail-value">{activity?.broadActivityArea || "Construct School Buildings"}</div>
        </div>
      </div>
      
      <div className="budget-setting-container">
        <div className="budget-info-card">
          <div className="budget-info-title">Estimated Annual Budget</div>
          <div className="budget-info-value">Rs. {formatCurrency(currentBudget)}</div>
        </div>
        
        {showForm ? (
          <div className="budget-form-card">
            <div className="budget-form-title">Enter the Estimated Budget for the Activity</div>
            <div className="budget-input-container">
              <span className="currency-label">Rs.</span>
              <input
                type="text"
                className="budget-input"
                value={enteredBudget}
                onChange={handleBudgetChange}
                placeholder="Enter budget amount"
              />
            </div>
            
            {error && <div className="budget-error-message">{error}</div>}
            
            <div className="budget-actions">
              <button className="budget-submit-btn" onClick={handleSubmit}>Submit</button>
              <button className="budget-cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="budget-success-card">
            <div className="budget-success-message">{successMessage}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeBudgetSetting;