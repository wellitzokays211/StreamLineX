import React, { useState } from 'react';
import Dashboard from './Dashboard';
import PriorityList from './PriorityList';
import ApprovedActivities from './ApprovedActivities';
import ViewActivity from './ViewActivity';
import './App.css';

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
    alert('View Pending Activities clicked!');
  };

  // Render the current view
  return (
    <div className="app">
      {currentView === 'dashboard' ? (
        <Dashboard 
          onChangeBudget={handleChangeBudget}
          currentBudget={currentBudget}
          onViewActivityList={handleViewActivityList}
          onViewPriorityList={handleViewPriorityList}
          onAddActivity={handleAddActivity}
          onViewApprovedActivities={handleViewApprovedActivities}
          onViewPendingActivities={handleViewPendingActivities}
          onViewActivity={handleViewActivity}
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
      ) : null}
    </div>
  );
}

export default App;