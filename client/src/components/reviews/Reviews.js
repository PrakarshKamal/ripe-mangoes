import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import api from "../../api/axiosConfig";
import Review from "../review/Review";
import "./Reviews.css";

// Reviews component
const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const reviewText = useRef();
  let params = useParams();

  const movieId = params.movieId; // movieId is the imdbId

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  // Function to add a review
  const addReview = async (e) => {
    e.preventDefault();

    const review = reviewText.current;

    // Check if the review is empty
    if (!review.value.trim()) {
      alert("Please enter a review before submitting.");
      return;
    }

    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: review.value,
        imdbId: movieId,
      });

      const updated =
        reviews != null
          ? [...reviews, { body: review.value }]
          : [{ body: review.value }];

      review.value = "";

      setReviews(updated);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Reviews</h2>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img
            src={movie?.poster}
            alt="movie-poster"
            className="movie-poster-img"
          />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <Review
                    handleSubmit={addReview}
                    labelText="Write a review"
                    reviewText={reviewText}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((rev) => {
            return (
              <>
                <Row>
                  <Col>{rev.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
