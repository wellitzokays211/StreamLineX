import React, { useState } from 'react';

//import reusable components
import './App.css';
import Header, { Sidebar } from "./Header";
import Notifications from './Notifications';
import Messages from './Messages';
import Profile from './Profile';  

// Import RoleSelection component
import RoleSelection from './RoleSelection';

// Import the role dashboards
import PdDashboard from './p_director/PdDashboard';
import SeDashboard from './s_eng/SeDashboard';
import RpDashboard from './res_person/RpDashboard';
import Dashboard from './dev_officer/Dashboard';

//development officer components
import PriorityList from './dev_officer/PriorityList';
import ApprovedActivities from './dev_officer/ApprovedActivities';
import ViewActivity from './dev_officer/ViewActivity';
import AssignActivity from './dev_officer/AssignActivity';
import RequestApproval from './dev_officer/RequestApproval';
import PendingActivities from './dev_officer/PendingActivities';

function App() {
  const [currentView, setCurrentView] = useState('roleSelection');
  const [currentRole, setCurrentRole] = useState(null);
  const [currentBudget, setCurrentBudget] = useState(3000000.00);
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Handler for role selection
  const handleRoleSelection = (role) => {
    setCurrentRole(role);
    switch (role) {
      case 'development-officer':
        setCurrentView('dashboard');
        break;
      case 'site-engineer':
        setCurrentView('seDashboard');
        break;
      case 'provincial-director':
        setCurrentView('pdDashboard');
        break;
      case 'responsible-person':
        setCurrentView('rpDashboard');
        break;
      default:
        setCurrentView('roleSelection');
    }
  };
  
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

  // Handler for back button on priority list and other views
  const handleBackToDashboard = () => {
    // Back button behavior depends on the current role
    if (currentRole === 'development-officer') {
      setCurrentView('dashboard');
    } else if (currentRole === 'site-engineer') {
      setCurrentView('seDashboard');
    } else if (currentRole === 'provincial-director') {
      setCurrentView('pdDashboard');
    } else if (currentRole === 'responsible-person') {
      setCurrentView('rpDashboard');
    } else {
      setCurrentView('roleSelection');
    }
  };

  // Handler for home button/logout to return to role selection
  const handleReturnToRoleSelection = () => {
    setCurrentRole(null);
    setCurrentView('roleSelection');
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

   // Handler for notification click
   const handleNotificationClick = () => {
    setCurrentView('notifications');
  };

  // Handler for message click
  const handleMessageClick = () => {
    setCurrentView('messages');
  };

  // Handler for profile click
  const handleProfileClick = () => {
    setCurrentView('profile');
  };

  // Render the current view
  return (
    <div className="app-container">
      {currentView === 'roleSelection' ? (
        <RoleSelection onSelectRole={handleRoleSelection} />
      ) : (
        <>
          <Sidebar onHomeClick={handleReturnToRoleSelection} currentRole={currentRole} />
          <div className="main-content">
            <Header 
              onNotificationClick={handleNotificationClick}
              onMessageClick={handleMessageClick}
              onProfileClick={handleProfileClick}
              currentRole={currentRole}
            />
            <div className="content-wrapper">
              {/* Development Officer Views */}
              {currentView === 'dashboard' && (
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
              )}
              {currentView === 'priorityList' && (
                <PriorityList 
                  onBack={handleBackToDashboard}
                  currentBudget={currentBudget}
                />
              )}
              {currentView === 'approvedActivities' && (
                <ApprovedActivities 
                  onBack={handleBackToDashboard}
                  onViewActivity={handleViewActivity}
                />
              )}
              {currentView === 'viewActivity' && (
                <ViewActivity 
                  activity={selectedActivity}
                  onBack={handleBackToApprovedActivities}
                />
              )}
              {currentView === 'assignActivity' && (
                <AssignActivity 
                  onBack={handleBackToDashboard}
                />
              )}
              {currentView === 'requestApproval' && (
                <RequestApproval 
                  onBack={handleBackToDashboard}
                  activity={selectedActivity}
                />
              )}
              {currentView === 'pendingActivities' && (
                <PendingActivities 
                  onBack={handleBackToDashboard}
                  onRequestApproval={handleRequestApprovalFromPending}
                />
              )}
              
              {/* Other role dashboards */}
              {currentView === 'seDashboard' && (
                <SeDashboard onBack={handleReturnToRoleSelection} />
              )}
              {currentView === 'pdDashboard' && (
                <PdDashboard onBack={handleReturnToRoleSelection} />
              )}
              {currentView === 'rpDashboard' && (
                <RpDashboard onBack={handleReturnToRoleSelection} />
              )}

              {/* Common views */}
              {currentView === 'notifications' && (
                <Notifications onBack={handleBackToDashboard} />
              )}
              {currentView === 'messages' && (
                <Messages onBack={handleBackToDashboard} />
              )}
              {currentView === 'profile' && (
                <Profile onBack={handleBackToDashboard} />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;