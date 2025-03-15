import React, { useState } from 'react';

import Dashboard from './dev_officer/Dashboard';
import PriorityList from './dev_officer/PriorityList';
import ApprovedActivities from './dev_officer/ApprovedActivities';
import ViewActivity from './dev_officer/ViewActivity';
import AssignActivity from './dev_officer/AssignActivity';
import RequestApproval from './dev_officer/RequestApproval';
import PendingActivities from './dev_officer/PendingActivities';

import './App.css';
import Header, { Sidebar } from "./Header";

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [currentBudget, setCurrentBudget] = useState(3000000.00);
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Handler for changing budget
  const handleChangeBudget = () => {
    const newBudget = prompt('Enter new budget:', currentBudget);
    if (newBudget && !isNaN(newBudget)) {
      setCurrentBudget(parseFloat(newBudget));
    }
  };

  // Handler for view activity list
  const handleViewActivityList = () => {
    // This would navigate to activity list in a full implementation
    alert('View Activity List clicked!');
  };

  // Handler for add activity
  const handleAddActivity = () => {
    // This would open add activity form in a full implementation
    alert('Add Activity clicked!');
  };

  // Handler for view priority list
  const handleViewPriorityList = () => {
    setCurrentView('priorityList');
  };

  // Handler for back button on priority list
  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
  };

  // Handler for viewing approved activities
  const handleViewApprovedActivities = () => {
    setCurrentView('approvedActivities');
  };

  // Handler for viewing a specific activity
  const handleViewActivity = (activity) => {
    setSelectedActivity(activity);
    setCurrentView('viewActivity');
  };

  // Handler for back from view activity
  const handleBackToApprovedActivities = () => {
    setCurrentView('approvedActivities');
  };

  // Handler for viewing pending activities
  const handleViewPendingActivities = () => {
    setCurrentView('pendingActivities');
  };

  // Handler for assign activity
  const handleAssignActivity = () => {
    setCurrentView('assignActivity');
  };

  // Handler for request approval
  const handleRequestApprovalFromPending = (activity) => {
    setSelectedActivity(activity);
    setCurrentView('requestApproval');
  };

  // Render the current view
  return (
    <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="content-wrapper">
            {currentView === 'dashboard' ? (
              <Dashboard 
              onChangeBudget={handleChangeBudget}
              currentBudget={currentBudget}
              onViewActivityList={handleViewActivityList}
              onViewPriorityList={handleViewPriorityList}
              onAddActivity={handleAddActivity}
              onViewApprovedActivities={handleViewApprovedActivities}
              onViewPendingActivities={handleViewPendingActivities}
              onAssignActivity={handleAssignActivity}
              onRequestApproval={handleRequestApprovalFromPending}
            />
          ) : currentView === 'priorityList' ? (
            <PriorityList 
              onBack={handleBackToDashboard}
              currentBudget={currentBudget}
            />
          ) : currentView === 'approvedActivities' ? (
            <ApprovedActivities 
              onBack={handleBackToDashboard}
              onViewActivity={handleViewActivity}
            />
          ) : currentView === 'viewActivity' ? (
            <ViewActivity 
              activity={selectedActivity}
              onBack={handleBackToApprovedActivities}
            />
          ) : currentView === 'assignActivity' ? (
            <AssignActivity 
              onBack={handleBackToDashboard}
            />
          ) : currentView === 'requestApproval' ? (
            <RequestApproval 
              onBack={handleBackToDashboard}
            />
          ) : currentView === 'pendingActivities' ? (
            <PendingActivities 
              onBack={handleBackToDashboard}
              onRequestApproval={handleRequestApprovalFromPending}  // Use this name consistently
            />
          ) : currentView === 'requestApproval' ? (
            <RequestApproval 
              onBack={handleBackToDashboard}
              activity={selectedActivity}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;