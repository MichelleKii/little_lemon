import React, { useState } from 'react';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';

const Main = () => {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSubmit = (formData) => {
    // Here you would call the API to submit the form data
    // For now, just log the form data and set bookingConfirmed to true
    console.log('Form Data:', formData);
    setBookingConfirmed(true);
  };

  return (
    <div>
      <h1>Little Lemon Table Booking</h1>
      {bookingConfirmed ? (
        <ConfirmedBooking />
      ) : (
        <BookingForm onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default Main;
