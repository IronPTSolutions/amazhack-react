import "./Reviews.css";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

export default function Reviews({ reviews }) {
  const [reviewLi, setReviews] = useState(reviews);
  const [error, setError] = useState();

  let liReviews = []
  
  if (reviews) {
    liReviews = reviews.map(review => (
      <li key={review.id} className="nonStyle">
        <h5>{review.title}</h5>
        <p>{review.user.name}</p>
        <p>Rate: {review.score}</p>
      </li>
    ));
  }

  return (
    <div>
      <h3>Reviews:</h3>
      <ul>
        {liReviews}
      </ul>
    </div>
  );
}