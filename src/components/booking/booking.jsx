import React from 'react';
import './booking.css';

const BookingCard = ({ name, date, time, service, tests }) => {
  return (
    <div className="booking-card">
      <div className="booking-header">
        <div className="booking-name">{name}</div>
        <div className="booking-status">
          <img src="/images/green.jpg" alt="Confirmed" className="status-icon" />
          Appointment Confirmed
        </div>
      </div>
      <div className="booking-details">
        <div className="booking-date">{date}</div>
        <div className="booking-time">{time}</div>
        <div className="booking-service">{service}</div>
        <div className="booking-tests">{tests} Lab Tests</div>
      </div>
    </div>
  );
};

const BookingCarousel = () => {
  const bookings = [
    {
      name: 'Mr. Suresh Gaikwad',
      date: '03 Nov\'22, Wednesday',
      time: '09:30-10:30 AM',
      service: 'Home Sample Collection',
      tests: '03'
    },
    {
        name: 'Mr. Suresh Gaikwad',
        date: '03 Nov\'22, Wednesday',
        time: '09:30-10:30 AM',
        service: 'Home Sample Collection',
        tests: '03'
      },
      {
        name: 'Mr. Suresh Gaikwad',
        date: '03 Nov\'22, Wednesday',
        time: '09:30-10:30 AM',
        service: 'Home Sample Collection',
        tests: '03'
      },
      {
        name: 'Mr. Suresh Gaikwad',
        date: '03 Nov\'22, Wednesday',
        time: '09:30-10:30 AM',
        service: 'Home Sample Collection',
        tests: '03'
      },
  
  ];

  return (
    <div className="booking-carousel">
      <h2>Your Active Bookings</h2>
      <div className="carousel-container">
        {bookings.map((booking, index) => (
          <BookingCard key={index} {...booking} />
        ))}
      </div>
    </div>
  );
};

export default BookingCarousel;
