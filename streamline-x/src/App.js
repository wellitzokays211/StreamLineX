import React, { useState } from 'react';
import Dashboard from './Dashboard';
import PriorityList from './PriorityList';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [currentBudget, setCurrentBudget] = useState(3000000.00);

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
        />
      ) : currentView === 'priorityList' ? (
        <PriorityList 
          onBack={handleBackToDashboard}
          currentBudget={currentBudget}
        />
      ) : null}
    </div>
  );
}

export default App;