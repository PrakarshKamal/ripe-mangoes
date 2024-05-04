import React from "react";
import Hero from "../hero/Hero";

// Home component
const Home = ({ movies, addToWatchlist }) => {
  return (
    <div>
      {/* Hero component to display the hero section */}
      <Hero movies={movies} addToWatchlist={addToWatchlist} />
    </div>
  );
};

export default Home;
