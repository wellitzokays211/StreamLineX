import React, { useState } from 'react';
import './Dashboard.css';
import ActivityList from './ActivityList';
import AddActivity from './AddActivity';
import BudgetUpdate from './BudgetUpdate';
import PriorityList from './PriorityList'; // Import PriorityList component

// Icons components (same as before)
const BudgetIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z M14.5,14h-3v3h-2v-3h-3v-2h3V9h2v3h3V14z"/>
  </svg>
);

const ApprovedIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M10,17l-5-5l1.41-1.41L10,14.17l7.59-7.59L19,8L10,17z"/>
  </svg>
);

const PendingIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"/>
  </svg>
);

const ActivityIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M20,6h-4V4c0-1.1-0.9-2-2-2h-4C8.9,2,8,2.9,8,4v2H4C2.9,6,2,6.9,2,8v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M10,4h4v2h-4V4z M16,15h-3v3h-2v-3H8v-2h3v-3h2v3h3V15z"/>
  </svg>
);

const PriorityIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M7,21H3V10h4V21z M14,10h-4v11h4V10z M21,10h-4v11h4V10z M7,8H3V5C3,3.9,3.9,3,5,3h2V8z M14,3h-4v5h4V3z M21,3h-4v5h4V3z"/>
  </svg>
);

const PlanIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M14,10H2v2h12V10z M14,6H2v2h12V6z M18,14v-4h-2v4h-4v2h4v4h2v-4h4v-2H18z M2,16h8v-2H2V16z"/>
  </svg>
);

const AddIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"/>
  </svg>
);

const AssignIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S8,5.79,8,8S9.79,12,12,12z M12,14c-2.67,0-8,1.34-8,4v2h16v-2C20,15.34,14.67,14,12,14z"/>
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

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [budget, setBudget] = useState(3000000.00);

  // Handle navigation to different screens
  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  // Handle budget update
  const handleUpdateBudget = (newBudget) => {
    setBudget(parseFloat(newBudget));
    setCurrentScreen('dashboard');
  };
  
  // Render current screen based on state
  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return (
          <Dashboard 
            onChangeBudget={() => navigateTo('budgetUpdate')} 
            currentBudget={budget}
            onViewActivityList={() => navigateTo('activityList')}
            onAddActivity={() => navigateTo('addActivity')}
            onViewPriorityList={() => navigateTo('priorityList')}
          />
        );
      case 'activityList':
        return <ActivityList onBack={() => navigateTo('dashboard')} />;
      case 'addActivity':
        return <AddActivity onBack={() => navigateTo('dashboard')} />;
      case 'budgetUpdate':
        return (
          <BudgetUpdate 
            onBack={() => navigateTo('dashboard')} 
            currentBudget={budget}
            onUpdateBudget={handleUpdateBudget}
          />
        );
      case 'priorityList':
        return <PriorityList onBack={() => navigateTo('dashboard')} currentBudget={budget} />;
      default:
        return <Dashboard />;
    }
  };

  return renderScreen();
};

// Dashboard component (with navigation props)
const Dashboard = ({ onChangeBudget, currentBudget = 3000000.00, onViewActivityList, onAddActivity, onViewPriorityList }) => {
  return (
    <div className="dashboard-container">
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
          <h1>Dashboard</h1>
          
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-content">
                <div>
                  <div className="stat-title">Estimated Annual Budget</div>
                  <div className="stat-value">
                    Rs. {currentBudget.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="stat-action">
                    <a href="#" className="change-budget" onClick={(e) => {
                      e.preventDefault();
                      onChangeBudget();
                    }}>Change Budget</a>
                  </div>
                </div>
                <div className="stat-icon budget-icon">
                  <BudgetIcon />
                </div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-content">
                <div>
                  <div className="stat-title">Approved</div>
                  <div className="stat-value">60</div>
                </div>
                <div className="stat-icon approved-icon">
                  <ApprovedIcon />
                </div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-content">
                <div>
                  <div className="stat-title">Pending</div>
                  <div className="stat-value">40</div>
                </div>
                <div className="stat-icon pending-icon">
                  <PendingIcon />
                </div>
              </div>
            </div>
          </div>
          
          <div className="actions-row">
            <div className="action-card">
              <button className="action-button" onClick={onViewActivityList}>
                <span>View Activity List</span>
                <ActivityIcon />
              </button>
            </div>
            
            <div className="action-card">
              <button className="action-button" onClick={onViewPriorityList}>
                <span>View Priority List</span>
                <PriorityIcon />
              </button>
            </div>
          </div>
          
          <div className="actions-row">
            <div className="action-card">
              <button className="action-button">
                <span>View Annual Development Plan</span>
                <PlanIcon />
              </button>
            </div>
            
            <div className="action-card blue">
              <button className="action-button blue" onClick={onAddActivity}>
                <span>Add Activity</span>
                <AddIcon />
              </button>
            </div>
            
            <div className="action-card blue">
              <button className="action-button blue">
                <span>Assign Activity</span>
                <AssignIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;