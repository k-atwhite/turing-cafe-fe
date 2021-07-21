import React from "react";
import "./Reservations.css";
import ReservationCard from "../ReservationCard/ReservationCard";

const Reservations = ({ reservations }) => {
  const allReservations = reservations.map((reservation) => {
    return (
      <ReservationCard
        key={reservation.id}
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
