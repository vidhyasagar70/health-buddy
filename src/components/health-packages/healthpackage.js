import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './healthpackage.css';

const Healthpackage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config')
      .then(response => {
        const data = response.data[0].page_config.find(item => item.id === "3");
        if (data) {
          const categoryValues = data.categories['10386'];
          setCategories(categoryValues);
          setSelectedCategory(categoryValues[0]);
          setPackages(data.props[0].packages);
          filterPackages(data.props[0].packages, categoryValues[0]);
        } else {
          setError('No data found for the specified ID');
        }
      })
      .catch(error => {
        setError('Error fetching data');
      });
  }, []);

  const filterPackages = (packages, category) => {
    const filtered = packages.filter(pkg =>
      pkg.subCategories.some(subCategory => subCategory.toLowerCase() === category.toLowerCase())
    );
    setFilteredPackages(filtered);
  };

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0]);
      filterPackages(packages, categories[0]);
    }
  }, [categories, packages]);

  return (
    <div className="health-checkup">
      <h1>Featured Health Check-up Packages</h1>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          <div className="categories">
            <div className="categories-container">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedCategory(category);
                    filterPackages(packages, category);
                  }}
                  className={selectedCategory === category ? 'active' : ''}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="packages-container">
            {filteredPackages.map(pkg => (
              <div key={pkg.packageId} className="package">
                <h2>{pkg.packageDisplayName}</h2>
                <p>{pkg.testCount} Tests</p>
                <p>Fasting: {pkg.fastingHoursText}</p>
                <p>Available at: {pkg.visitType.join(', ')}</p>
                <p>Price: ₹{pkg.price}</p>
                <button className="add-btn">Add</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Healthpackage;
