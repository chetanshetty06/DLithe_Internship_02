import React from "react";
import "./FoodCard.css";

const FoodCard = ({ meal }) => {
  return (
    <div className="food-card">
      <img src={meal.image} alt={meal.title} />
      <h3>{meal.title}</h3>
    </div>
  );
};

export default FoodCard;