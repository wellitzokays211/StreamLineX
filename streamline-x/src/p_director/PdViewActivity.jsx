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

  // Table styles
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse'
  };
  
  const tdStyle = {
    padding: '12px 8px',
    borderBottom: '1px solid #e0e0e0'
  };
  
  const tdLabelStyle = {
    ...tdStyle,
    fontWeight: 'bold',
    width: '30%',
    verticalAlign: 'top'
  };
  
  const tdValueStyle = {
    ...tdStyle,
    color: '#333',
    verticalAlign: 'top'
  };

  return (
    <div className="content">
      <BackButton onClick={onBack} />
      
      <h1>Activity ID: {activity?.id || '001'}</h1>
      
      <div className="card" style={{ marginBottom: '20px', padding: '10px' }}>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={tdLabelStyle}>Activity Description:</td>
              <td style={tdValueStyle}>{activity?.description || 'Roof Construction of ABC M.V.'}</td>
            </tr>
            <tr>
              <td style={tdLabelStyle}>District:</td>
              <td style={tdValueStyle}>{activity?.district || 'Kandy'}</td>
            </tr>
            <tr>
              <td style={tdLabelStyle}>Broad Activity Area:</td>
              <td style={tdValueStyle}>{activity?.area || 'Construct School Buildings'}</td>
            </tr>
            <tr>
              <td style={tdLabelStyle}>Sub Component:</td>
              <td style={tdValueStyle}>{activity?.subComponent || 'Strengthening education administration and management at provincial, and zonal levels'}</td>
            </tr>
            <tr>
              <td style={tdLabelStyle}>Component:</td>
              <td style={tdValueStyle}>{activity?.component || 'Strengthen towards education governance and service delivery of education'}</td>
            </tr>
          </tbody>
        </table>
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
            fontSize: '14px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => {
            if (approvalStatus !== 'Approved') {
              e.currentTarget.style.backgroundColor = '#b58a1f'; // Darker shade for hover
            }
          }}
          onMouseOut={(e) => {
            if (approvalStatus !== 'Approved') {
              e.currentTarget.style.backgroundColor = '#E7AE28';
            }
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
            fontSize: '14px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#d9d9d9'; // Darker shade for hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#f1f1f1';
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
            fontSize: '14px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#3a73b5'; // Darker shade for hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#4a90e2';
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
            fontSize: '14px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#c0392b'; // Darker shade for hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#e74c3c';
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PdViewActivity;