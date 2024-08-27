import React from "react";
import { Row } from "react-bootstrap";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      <Row>
        <strong>Rating: {rating}</strong>
      </Row>
      <Row>
        <div className="star-rating">
          {[...Array(fullStars)].map((_, index) => (
            <span key={index} className="star full">
              ★
            </span>
          ))}

          {hasHalfStar && <span className="star half">★</span>}

          {[...Array(emptyStars)].map((_, index) => (
            <span key={index} className="star empty">
              ★
            </span>
          ))}
        </div>
      </Row>
    </>
  );
};

export default Rating;
