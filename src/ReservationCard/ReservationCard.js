import React from "react";
import "./ReservationCard.css";

const Card = ({ name, date, time, number }) => {
  return (
    <div className="reservation-card">
      <div className="reservation-details">
        <h4>{name}</h4>
        <p>{date}</p>
        <p>{time} pm</p>
        <p>number of guests: {number}</p>
      </div>
    </div>
  );
};

export default Card;
