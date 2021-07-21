import React from "react";
import "./ReservationCard.css";

const Card = ({ name, date, time, number }) => {
  return (
    <div className="reservation-card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number}</p>
    </div>
  );
};

export default Card;
