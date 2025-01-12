import React from 'react';
import './secure.css';

function Secure() {
  return (
    <div>
      <h1>100% Safe & Secure Lab Tests</h1>
      <div className="row-container">
        <div className="card">
          <img src="/images/gov.png" alt="Diagnostic Centres" />
          <p>Gov. Approved Diagnostic Centres</p>
        </div>
        <div className="card">
          <img src="/images/temp.png" alt="Temperature Check" />
          <p>Daily Temperature Check of all Technicians</p>
        </div>
        <div className="card">
          <img src="/images/mask.png" alt="Mask & Sanitizers" />
          <p>Mandatory use of Mask & Sanitizers</p>
        </div>
      </div>
    </div>
  );
}

export default Secure;
