import { useState, useEffect } from "react";
import api from "./api/axiosConfig";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";
import WatchList from "./components/watchlist/Watchlist";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import "./App.css";
import NotFound from "./components/notFound/NotFound";

// Main app component
function App() {
  // States for movies, movie, reviews, and isLoggedIn
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [watchlist, setWatchlist] = useState([]);
  const navigate = useNavigate();

  // Function to get movies from the API
  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to get movie data from the API using movieId
  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);

      const singleMovie = response.data;

      setMovie(singleMovie);

      setReviews(singleMovie.reviews);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to add a movie to the watchlist
  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
    navigate("/watchlist");
  };

  // UseEffect to get movies when the component mounts
  useEffect(() => {
    getMovies();
  }, []);

  return (
    // All the Routes for the app
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={<Home movies={movies} addToWatchlist={addToWatchlist} />}
          ></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route
            path="/Reviews/:movieId"
            element={
              <Reviews
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          ></Route>
          <Route
            path="/watchlist"
            element={<WatchList watchlist={watchlist} />}
          />
          <Route
            path="/login"
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            path="/register"
            element={
              <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
