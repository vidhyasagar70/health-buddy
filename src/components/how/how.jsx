import React from 'react';
import './how.css';

function How() {
  return (

    <div>
         <h1>How it Works?</h1>
    <div className="how-container">
      
      <div className="steps-container">
        <div className="step">
          <img src="/images/micro.png" alt="Microscope" className="icon" />
          <p className="step-text">
            Search for required Lab tests and select Diagnostic centre of your choice. Add prescription, patient details and address to complete the booking.
          </p>
        </div>
        <div className="step">
          <img src="/images/doctor.png" alt="Doctor" className="icon" />
          <p className="step-text">
            Visit the lab centre as per your booking. For home sample collection, certified professional will collect the samples at your home.
          </p>
        </div>
        <div className="step">
          <img src="/images/msg.png" alt="Envelope" className="icon" />
          <p className="step-text">
            We will email you the reports. You can also access your reports within your account on the MediBuddy App.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default How;
