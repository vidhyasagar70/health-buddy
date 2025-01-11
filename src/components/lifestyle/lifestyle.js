import React, { useEffect, useState } from 'react';
import './lifestyle.css';

const LifeStyle = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching data from API...");
    fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config')
      .then(response => response.json())
      .then(apiData => {
        console.log("Data fetched:", apiData);
        const requiredData = apiData[0].page_config.find(item => item.id === "4" && item.title === "LifeStyle Health Check Packages");
        console.log("Required data:", requiredData);
        setData(requiredData);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  console.log("Component re-rendered");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="container">
      <h1>{data.title}</h1>
      <div className="packages">
        {data.props.map((pkg, index) => (
          <div key={index} className="package">
            <img src={pkg.imgSrc} alt={pkg.title} onError={(e) => { e.target.onerror = null; e.target.src="fallback-image-url"; }} />
            <p>{pkg.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeStyle;
