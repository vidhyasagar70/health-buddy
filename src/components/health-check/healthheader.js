import React, { useEffect, useState } from 'react';
import './healthheader.css';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('API Response:', data);
        const pageConfig = data[0].page_config;
        const featuredPackage = pageConfig.find(item => item.id === '3');
        console.log('Featured Package:', featuredPackage);
        if (featuredPackage && featuredPackage.categories) {
          setCategories(Object.values(featuredPackage.categories));
        } else {
          setError('No categories found in the API response');
        }
      })
      .catch(error => setError('Error fetching data: ' + error.message));
  }, []);

  return (
    <div>
        <h1>Featured Health Check-up Packages</h1>
    <div className="container">
      
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="nav-bar">
          {categories.map((category, index) => (
            <div key={index} className={`nav-item nav-item-${index}`}>
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default App;
