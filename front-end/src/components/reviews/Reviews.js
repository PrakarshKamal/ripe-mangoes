import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import api from '../../api/axiosConfig'
import Review from '../review/Review'

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const reviewText = useRef()
  const params = useParams()

  const movieId = params.movieId

  useEffect(() => {
    getMovieData(movieId)
  })

  const addReview = async (e) => {
    e.preventDefault()

    const review = reviewText.current

    try {
      const response = await api.post('/api/v1/reviews', {
        reviewBody: review.value,
        imdbId: movieId,
      })

      const updated = [...reviews, { body: review.value }]

      review.value = ''

      setReviews(updated)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h2>Reviews</h2>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="movie-poster" />
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
          {reviews?.map((review) => {
            return (
              <>
                <Row>
                  <Col>{review.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            )
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  )
}

export default Reviews
