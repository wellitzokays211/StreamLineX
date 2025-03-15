import React, { useState } from 'react';
import './ApprovedActivities.css';

const ApprovedActivities = ({ onBack, onViewActivity }) => {
  // Sample data for approved activities
  const approvedActivities = [
    {
      id: 'AC001',
      description: 'Roof Construction of ABC M.V.',
      district: 'Kandy',
      approvalStatus: 'Approved',
      assignedTo: 'S.E. Smith',
      broadActivityArea: 'Construct School Buildings',
      subComponent: 'Strengthening education administration and management at provincial, and zonal levels',
      component: 'Strengthen towards education governance and service delivery of education',
      priority: '1',
      status: 'On - Progress'
    },
    {
      id: 'AC004',
      description: 'Wall Construction of XYZ M.V.',
      district: 'Matale',
      approvalStatus: 'Approved',
      assignedTo: 'J.K. Johnson',
      broadActivityArea: 'Construct School Buildings',
      subComponent: 'Strengthening education administration and management at provincial levels',
      component: 'Strengthen education governance and service delivery',
      priority: '2',
      status: 'Planning'
    }
  ];

  return (
    <div className="approved-activities-container">
      
      <div className="content">
        <div className="back-button-container">
          <button className="back-button" onClick={onBack}>
            ← Back
          </button>
        </div>
        
        <h1>Approved Activities</h1>
        
        <div className="approved-activities-table-container">
          <table className="approved-activities-table">
            <thead>
              <tr>
                <th>Activity ID</th>
                <th>Activity Description</th>
                <th>District</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {approvedActivities.map(activity => (
                <tr key={activity.id}>
                  <td>{activity.id}</td>
                  <td>{activity.description}</td>
                  <td>{activity.district}</td>
                  <td>
                    <button 
                      className="view-button" 
                      onClick={() => onViewActivity(activity)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApprovedActivities;