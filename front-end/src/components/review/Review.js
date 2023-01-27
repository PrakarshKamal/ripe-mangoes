import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Review = ({ handleSubmit, labelText, reviewText, defaultValue }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control
          ref={reviewText}
          defaultValue={defaultValue}
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Button variant="outline-info" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  )
}

export default Review
