"use strict";

const bookings = [];

const bookFlights = (flightNum, numPassengers = 10, price = 199.99) => {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

console.log(bookings);

bookFlights("451");
