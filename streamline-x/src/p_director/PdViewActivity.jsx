import React, { useState } from 'react';
import { BackButton } from '../Header';

// Activity status indicator component
const ActivityStatus = ({ status }) => {
  const statusColors = {
    'Pending': '#f39c12',
    'Approved': '#27ae60',
    'Rejected': '#e74c3c',
  };    

  return (
    <div className="status-panel pd" style={{ marginBottom: '30px', backgroundColor: '#ffffff', padding: '10px', borderRadius: '5px' }}>
      <span className="status-label" style={{fontWeight:'bold', fontSize: '16px', padding: '2px 10px'}}>Approval Status: </span>
      <span 
        className="status-value" 
        style={{ 
          fontWeight: 'bold', 
          color: statusColors[status] || '#555'
        }}
      >
        {status}
      </span>
    </div>
  );
};

const PdViewActivity = ({ activity, onBack }) => {
  // Initialize state for approval status
  const [approvalStatus, setApprovalStatus] = useState(activity?.status || 'Pending');
  // State to track if we're in revision mode
  const [isRevising, setIsRevising] = useState(false);
  
  // Handler for approving activity
  const handleApproveActivity = () => {
    setApprovalStatus('Approved');
    // Here you would typically make an API call to update the status in the backend
  };

  // Handler for sending revisions
  const handleSendRevisions = () => {
    // Toggle to revision mode
    setIsRevising(true);
  };

  // If we're in revising mode, show the PdReviseActivity component
  if (isRevising) {
    return (
      <PdReviseActivity 
        activity={activity}
        onBack={() => setIsRevising(false)}
      />
    );
  }

  return (
    <div className="content">
      <BackButton onClick={onBack} />
      
      <h1>Activity ID: {activity?.id || '001'}</h1>
      
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <div style={{ fontWeight: 'bold' }}>Activity Description:</div>
            <div>{activity?.description || 'Roof Construction of ABC M.V.'}</div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <div style={{ fontWeight: 'bold' }}>District:</div>
            <div>{activity?.district || 'Kandy'}</div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <div style={{ fontWeight: 'bold' }}>Broad Activity Area:</div>
            <div>{activity?.area || 'Construct School Buildings'}</div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <div style={{ fontWeight: 'bold' }}>Sub Component:</div>
            <div>{activity?.subComponent || 'Strengthening education administration and management at provincial, and zonal levels'}</div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <div style={{ fontWeight: 'bold' }}>Component:</div>
            <div>{activity?.component || 'Strengthen towards education governance and service delivery of education'}</div>
          </div>
        </div>
      </div>
      
      <ActivityStatus status={approvalStatus} />
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button 
          className="btn-primary"
          onClick={handleApproveActivity}
          disabled={approvalStatus === 'Approved'}
          style={{ 
            backgroundColor: approvalStatus === 'Approved' ? '#aaa' : '#E7AE28',
            cursor: approvalStatus === 'Approved' ? 'not-allowed' : 'pointer',
            padding: '12px 20px',
            borderRadius: '10px',
            border: 'none',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          Approve Activity
        </button>
        
        <button 
          className="btn btn-secondary"
          onClick={handleSendRevisions}
          style={{ 
            backgroundColor: '#f1f1f1',
            padding: '12px 20px',
            borderRadius: '10px',
            border: 'none',
            color: '#333',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          Send Revisions
        </button>
      </div>
    </div>
  );
};

// PdReviseActivity component
const PdReviseActivity = ({ activity, onBack }) => {
  const [message, setMessage] = useState('');

  const handleSendRevisions = () => {
    // Here you would typically make an API call to send the revision
    alert('Revision sent for activity: ' + activity?.id);
    // Go back to previous screen after sending
    onBack();
  };

  return (
    <div className="content">
      <BackButton onClick={onBack} />
      
      <h2 style={{ marginBottom: '20px' }}>Revise Activity</h2>
      <h1>Activity ID: {activity?.id || '001'}</h1>
      
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="form-group">
          <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>Enter Your Message:</div>
          <textarea 
            className="form-input" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
          />
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button 
          className="btn-primary"
          onClick={handleSendRevisions}
          style={{ 
            backgroundColor: '#4a90e2',
            padding: '12px 20px',
            borderRadius: '5px',
            border: 'none',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          Send Revisions
        </button>
        
        <button 
          className="btn btn-secondary"
          onClick={onBack}
          style={{ 
            backgroundColor: '#e74c3c',
            padding: '12px 20px',
            borderRadius: '5px',
            border: 'none',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PdViewActivity;