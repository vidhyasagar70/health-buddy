import React, { useEffect, useState } from 'react';
import './review.css'; // Ensure you have the CSS file for styling

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
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
        console.log('API Data:', data); // Log the entire data received from the API
        if (data.length > 0 && data[0].page_config) {
          const userReviews = data[0].page_config.find(item => item.id === "6");
          if (userReviews && userReviews.props) {
            console.log('User Reviews:', userReviews.props); // Log the user reviews
            setReviews(userReviews.props);
          } else {
            setError('No reviews found');
          }
        } else {
          setError('Invalid data structure');
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError('Failed to fetch data: ' + error.message);
      });
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="reviews-section">
      <h2>What our Users say</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <div className="stars">
                {'★'.repeat(review.rating)}
              </div>
              <div className="review-date">
                {review.days}
              </div>
              <div className="review-location">
                {review.location}
              </div>
            </div>
            <div className="review-content">
              {review.content}
            </div>
            <div className="review-author">
              {review.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
