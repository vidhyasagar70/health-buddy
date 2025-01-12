import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Health</h4>
        <ul>
          <li>MediBuddy Gold</li>
          <li>Book Medicine</li>
          <li>Doctor Consultation</li>
          <li>Book a Lab test</li>
          <li>Covid Essential Items</li>
          <li>Surgery Care</li>
          <li>Dental</li>
          <li>Cancer Care</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Hospitalization</h4>
        <ul>
          <li>Locate hospital</li>
          <li>Download: eCard</li>
          <li>Track claim</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>ABOUT</h4>
        <ul>
          <li>Overview</li>
          <li>Testimonials</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Security</li>
          <li>Medical Value Travel Facilitator</li>
          <li>MediBuddy Beliefs</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Our Policies</h4>
        <ul>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Grievance Redressal</li>
          <li>Cancellation & Refund Policy</li>
          <li>Security at MediBuddy</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>DOWNLOAD APP</h4>
        <div className="app-icons">
          <i className="fab fa-google-play"></i>
          <i className="fab fa-apple"></i>
        </div>
        <h4>FOLLOW US</h4>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-twitter"></i>
          <i className="fas fa-rss"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
