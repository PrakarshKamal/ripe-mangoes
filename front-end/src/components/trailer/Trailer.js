import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import './Trailer.css'

const Trailer = () => {
  const params = useParams()
  const key = params.ytTrailerId

  return (
    <div className="movie-player-container">
      {key != null ? (
        <ReactPlayer
          className="movie-player"
          controls="true"
          url={`https://www.youtube.com/watch?v=${key}`}
          playing={true}
          width="100%"
          height="100%"
        />
      ) : null}
    </div>
  )
}

export default Trailer
