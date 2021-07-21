import React from "react";
import "./Reservations.css";

const Reservations = ({ reservations }) => {
  const allReservations = reservations.map((reservation) => {
    return (
      <ReservationCard
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    );
  });

  return <div className="reservations-wrapper">{allReservations}</div>;
};

export default Reservations;
