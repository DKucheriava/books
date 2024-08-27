import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "./rating";

const Comments = ({ bookId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/getComments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ book_id: bookId }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setComments(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, [bookId]);

  return (
    <>
      <Container className="mt-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="comment-card mb-3 p-3 border rounded"
            >
              <Row>
                <Col xs={4} className="left-column">
                  <strong className="user-name">{comment.user_name}</strong>
                  <div className="rating-container mt-2">
                    <Rating rating={comment.rating} />
                  </div>
                </Col>
                <Col xs={8} className="right-column" aria-rowspan={2}>
                  <p className="comment-text">{comment.comment}</p>
                </Col>
              </Row>
            </div>
          ))
        ) : (
          <p>No comments found.</p>
        )}
      </Container>
    </>
  );
};

export default Comments;
