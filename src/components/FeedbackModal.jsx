// FeedbackModal.js
import React, { useState } from "react";
import Modal from "react-modal";
import StarRatings from "react-star-ratings";
import "./Feedback.css";
const FeedbackModal = ({ isOpen, onRequestClose, onSubmit ,onRatingChange,onReviewChange}) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    console.log(newRating)
    onRatingChange(newRating); // Pass the selected rating to the parent component

  };
  const handleReview = (event) => {
    console.log(event.target.value)

    setReview(event.target.value);
    onReviewChange(event.target.value); // Pass the selected rating to the parent component

  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      className="feedback-modal"
      shouldCloseOnOverlayClick={false}
    >
      <h2 className="feedback-title">Feedback</h2>
      <StarRatings
        rating={rating}
        changeRating={handleRatingChange}
        numberOfStars={5}
        name="rating"
        className="star-ratings"
        starRatedColor="green"
      />
      <textarea
        placeholder="Type your feedback here..."
        className="feedback-textarea"
        onChange={handleReview}
        value={review}
      />
      <button onClick={onSubmit} className="submit-button">
        Submit
      </button>
      <button onClick={onRequestClose} className="close-button">
        Close
      </button>
    </Modal>
  );
};

export default FeedbackModal;
