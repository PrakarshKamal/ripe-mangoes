import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSquare } from "@fortawesome/free-solid-svg-icons";
import "./Watchlist.css";

// Watchlist component
const Watchlist = ({ watchlist }) => {
  // watchedMovies state in local storage
  const [watchedMovies, setWatchedMovies] = useState(() => {
    const storedMovies = localStorage.getItem("watchedMovies");
    return storedMovies ? JSON.parse(storedMovies) : [];
  });

  // toggleWatched function to toggle watched movies and save to local storage
  const toggleWatched = (index) => {
    const newWatchedMovies = [...watchedMovies];
    if (newWatchedMovies.includes(index)) {
      newWatchedMovies.splice(newWatchedMovies.indexOf(index), 1);
    } else {
      newWatchedMovies.push(index);
    }
    setWatchedMovies(newWatchedMovies);
    localStorage.setItem("watchedMovies", JSON.stringify(newWatchedMovies));
  };

  return (
    <div>
      <h1 className="page-title">Your watchlist</h1>
      {watchlist.length === 0 ? (
        <p className="empty-watchlist">Your watchlist is empty.</p>
      ) : (
        <ul>
          {watchlist.map((movie, index) => (
            <li key={index} className="movie-container">
              <span className="movie-title">{movie.title}</span>
              <button
                className="toggle-buttons"
                onClick={() => toggleWatched(index)}
              >
                {/* Toggle buttons for check and square */}
                {watchedMovies.includes(index) ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faSquare} />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Watchlist;
