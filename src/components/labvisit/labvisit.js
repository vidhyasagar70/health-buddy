import React from 'react';
import './labvisit.css';

const labs = [
  {
    name: "Apollo Diagnostics",
    location: "Kormanangala, Bangalore",
    nextSlot: "07:30 AM, Tomorrow",
    rating: 4.5,
    ratingsCount: 120,
    imageUrl: "/images/labvisit.png", 
  },
  {
    name: "Apollo Diagnostics",
    location: "Kormanangala, Bangalore",
    nextSlot: "07:30 AM, Tomorrow",
    rating: 4.5,
    ratingsCount: 120,
    imageUrl: "/images/labvisit.png", 
  },
  {
    name: "Apollo Diagnostics",
    location: "Kormanangala, Bangalore",
    nextSlot: "07:30 AM, Tomorrow",
    rating: 4.5,
    ratingsCount: 120,
    imageUrl: "/images/labvisit.png", 
  },

];

const LabCard = ({ lab }) => (
  <div className="lab-card">
    <img src={lab.imageUrl} alt={lab.name} className="lab-image" />
    <div className="lab-info">
      <h3>{lab.name}</h3>
      <p>{lab.location}</p>
      <p>Next Slot - {lab.nextSlot}</p>
      <div className="rating">
        <span>⭐ {lab.rating}/5 ({lab.ratingsCount} ratings)</span>
      </div>
    </div>
  </div>
);

const Labvisit = () => (
  <div className="labs-visited">
    <div className="header">
      <h2>Labs Visited</h2>
      <a href="#see-all">See All</a>
    </div>
    <div className="carousel">
      {labs.map((lab, index) => (
        <LabCard key={index} lab={lab} />
      ))}
    </div>
  </div>
);

export default Labvisit;
