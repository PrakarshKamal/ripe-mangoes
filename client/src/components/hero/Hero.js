import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Hero.css";

// Hero component
const Hero = ({ movies, addToWatchlist }) => {
  const navigate = useNavigate();

  // Function to handle reviews and navigate to the reviews page
  function handleReviews(movieId) {
    navigate(`/Reviews/${movieId}`);
  }

  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <div className="movie-carousel-container">
      {/* Carousel for displaying movies with arrows for forwards and backwards actions */}
      <Carousel autoPlay={false} navButtonsAlwaysVisible={true}>
        {movies?.map((movie) => {
          return (
            <Paper key={movie.imdbId}>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={{ "--img": `url(${movie.backdrops[0]})` }}
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt="movie poster" />
                    </div>
                    <div>
                      <p className="movie-title">{movie.title}</p>
                      <h5 className="movie-releaseDate">
                        Released on: {formatDate(movie.releaseDate)}
                      </h5>
                    </div>
                    <div className="movie-buttons-container">
                      <Link
                        to={`/Trailer/${movie.trailerLink.substring(
                          movie.trailerLink.length - 11
                        )}`}
                      >
                        <div className="play-button-container">
                          <FontAwesomeIcon
                            className="play-button"
                            icon={faCirclePlay}
                          />
                        </div>
                      </Link>
                      <div className="movie-review-button-container">
                        <Button
                          onClick={() => handleReviews(movie.imdbId)}
                          variant="secondary"
                          size="lg"
                        >
                          Reviews
                        </Button>
                        <div className="button-container">
                          {/* Button to add movie to watchlist */}
                          <Button
                            variant="secondary"
                            size="lg"
                            className="watchlist-button"
                            onClick={() => addToWatchlist(movie)}
                          >
                            Add to Watchlist
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
