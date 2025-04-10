import React from "react";
import "../App.css";

const DestinationCard = ({ destination }) => {
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{destination.name}</h2>
        <p className="card-location">{destination.location}</p>
        <p className="card-description">{destination.description}</p>
        <p className="card-price">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;