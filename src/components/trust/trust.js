import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './trust.css';

const Trust = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config')
      .then((response) => {
        const filteredData = response.data.filter((item) => item.id === "8");
        if (filteredData.length > 0) {
          setData(filteredData[0].props);
        } else {
          console.error('No items found with id "8"');
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="trust-container">
      <h1>
        Trusted by <span className="highlight">20,00,000+</span> Users Every Month
      </h1>
      <div className="container">
        <div className="info">
          <div className="info-item">
            <img
              src="https://www.medibuddy.in/assets/icons/labs/test.svg"
              alt="Diagnostic Centres"
            />
            <p>200+ Approved Diagnostic Centres</p>
          </div>
          <div className="info-item">
            <img
              src="https://www.medibuddy.in/assets/icons/labs/health.svg"
              alt="Pincodes Covered"
            />
            <p>1200+ Pincodes Covered</p>
          </div>
          <div className="info-item">
            <img
              src="https://www.medibuddy.in/assets/icons/labs/doctor.svg"
              alt="Lab Tests Offered"
            />
            <p>1200+ Lab Tests Offered</p>
          </div>
          <div className="info-item">
            <img
              src="https://www.medibuddy.in/assets/icons/labs/test.svg"
              alt="Diagnostic Centres"
            />
            <p>200+ Approved Diagnostic Centres</p>
          </div>
          <div className="info-item">
            <img
              src="https://www.medibuddy.in/assets/icons/labs/health.svg"
              alt="Pincodes Covered"
            />
            <p>1200+ Pincodes Covered</p>
          </div>
          <div className="info-item">
            <img
              src="https://www.medibuddy.in/assets/icons/labs/doctor.svg"
              alt="Lab Tests Offered"
            />
            <p>1200+ Lab Tests Offered</p>
          </div>
        </div>
        <div className="additional-info">
          {data.map((item, index) => (
            <div key={index} className="additional-info-item">
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
              <h3>{item.subTitle}</h3>
              <p>{item.subText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trust;
