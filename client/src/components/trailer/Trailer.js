import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Trailer.css";

// Trailer component
const Trailer = () => {
  const params = useParams();
  const key = params.ytTrailerId;

  return (
    <div>
      {/* Using trailer link id and then embedding the youtube player for that movie */}
      <div className="movie-player-container">
        {key != null ? (
          <ReactPlayer
            className="movie-player"
            controls={true}
            url={`https://www.youtube.com/watch?v=${key}`}
            playing={true}
            width="100%"
            height="100%"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Trailer;
