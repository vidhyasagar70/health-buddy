import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.css'; 

const BannerCarousel = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    // Fetching the page config data from the API
    axios
      .get('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config')
      .then((response) => {
        const bannersData = response.data[0].page_config.find(
          (config) => config.id === '2' && config.title === 'Banners'
        );
        if (bannersData) {
          setBanners(bannersData.props); // Fetch and set all banners
        }
      })
      .catch((error) => {
        console.error('Error fetching banners:', error);
      });
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length); 
    }, 3000);

    return () => clearInterval(interval); 
  }, [banners.length]);

  return (
    <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {banners.map((banner, index) => (
          banner.isActive && (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            >
              <img
                src={banner.bannerUrl}
                className="d-block w-100 banner-image"
                alt={`Banner ${index + 1}`}
              />
            </div>
          )
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BannerCarousel;
