import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './Hero.css'

const Hero = ({ movies }) => {
  const navigate = useNavigate()

  function handleReviews(movieId) {
    navigate(`/Reviews/${movieId}`)
  }
  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies?.map((movie) => {
          return (
            <Paper key={movie.imdbId}>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  style={{ '--img': `url(${movie.backdrops[0]})` }}
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt="movie poster" />
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
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
                          variant="info"
                        ></Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Hero
