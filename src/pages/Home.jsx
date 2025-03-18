import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import FoodCard from "../components/FoodCard";
import "./Home.css";

const Home = () => {
  const [meals, setMeals] = useState([]);

  return (
    <div className="home">
      <h1>Food App</h1>
      <SearchBar setMeals={setMeals} />
      <div className="food-list">
        {meals.map((meal) => (
          <FoodCard key={meal.id} meal={meal} /> 
        ))}
      </div>
    </div>
  );
};

export default Home;