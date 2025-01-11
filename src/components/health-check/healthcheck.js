import React, { useEffect, useState } from 'react';
import './healthcheck.css';

const HealthCheckupCarousel = () => {
  const [packages, setPackages] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
        if (data && data.length > 0 && data[0].page_config) {
          const pageConfig = data[0].page_config;

          // Fetching categories and subcategories from ID 3
          const categoryItem = pageConfig.find(item => item.id === '3');
          const fetchedCategories = categoryItem?.categories?.categories || [];
          console.log('Fetched Categories:', fetchedCategories);
          setCategories(fetchedCategories);

          // Filtering packages based on contractId and subCategories
          const filteredPackages = categoryItem?.props?.flatMap(prop => prop.packages || [])
            .filter(pkg => 
              pkg.contractId && pkg.subCategories.some(subCategory => fetchedCategories.includes(subCategory))
            );

          setPackages(filteredPackages);
          console.log('Filtered Packages:', filteredPackages);
        } else {
          console.error('No data found');
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <div className="categories">
        {categories.map((category, index) => (
          <button key={index} className="category-button">{category}</button>
        ))}
      </div>
      <div className="carousel">
        {packages.map((pkg, index) => (
          <div className="carousel-card" key={index}>
            <h3>{pkg.packageName}</h3>
            <p>{pkg.reportsTatText}</p>
            <p>{pkg.testCount} Tests</p>
            <ul>
              {pkg.testsSummary.map((test, idx) => (
                <li key={idx}>{test}</li>
              ))}
            </ul>
            <p>Fasting: {pkg.fastingHoursText}</p>
            <p className="original-price">₹{pkg.priceRange}</p>
            <p className="discount">{pkg.discount}% OFF</p>
            <p className="discounted-price">₹{pkg.price}</p>
            <p className="additional-offer">
              {pkg.tags.bottomTag ? pkg.tags.bottomTag.join(', ') : ''}
            </p>
            <button>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthCheckupCarousel;
