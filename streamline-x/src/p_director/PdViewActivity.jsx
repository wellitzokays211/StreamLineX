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
    <div className="status-panel pd" style={{ marginBottom: '15px', backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
      <span className="status-label" >Approval Status: </span>
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
  
  // Handler for approving activity
  const handleApproveActivity = () => {
    setApprovalStatus('Approved');
    // Here you would typically make an API call to update the status in the backend
  };

  // Handler for sending revisions
  const handleSendRevisions = () => {
    // Implementation for sending revision requests
    alert('Sending revision request for activity: ' + activity?.id);
  };

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

export default PdViewActivity;