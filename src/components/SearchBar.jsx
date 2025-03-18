import React, { useState } from "react";
import axios from "axios";
import "./SearchBar.css";

const SearchBar = ({ setMeals }) => {
  const [query, setQuery] = useState("");

  const searchMeals = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            query: query,
            apiKey: "06393c159c6549a5b4a3e5b43de5b6c0", // Replace with your Spoonacular API key
          },
        }
      );
      setMeals(response.data.results || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for food..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMeals}>Search</button>
    </div>
  );
};

export default SearchBar;