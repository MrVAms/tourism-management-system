import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

function Card({ src, title, description, price }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/search")} className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h5>{price}</h5>
      </div>
    </div>
  );
}

export default Card;
