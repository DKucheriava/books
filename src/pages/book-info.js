import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Image, Row, Col } from "react-bootstrap";
import Rating from "../components/rating";
import Comments from "../components/comments";

const BookInfo = () => {
  const { id } = useParams();
  const book = JSON.parse(sessionStorage.getItem("selectedBook"));

  if (!book || book.id !== parseInt(id, 10)) {
    return <p>Book not found</p>;
  }

  return (
    <>
      <Container>
        <div>
          <Row xs={1} md={2}>
            <Col md={4}>
              <Image
                id="book-cover"
                src={`/img/${book.cover_image}`}
                alt={`Cover image for ${book.title}`}
                rounded
              />
            </Col>
            <Col md={8} style={{ alignContent: "center" }}>
              <div mb={4}>
                <h3 style={{ marginBottom: "20px" }}>
                  <b>{book.title}</b>
                </h3>
              </div>
              <Rating rating={book.rating} />
              <p>
                <strong>Author:</strong> {book.author}
              </p>
              <p>
                <strong>Publication Year:</strong> {book.publication_year}
              </p>
              <p>
                <strong>Genre: </strong>
                {book.genre}
              </p>
              <p>
                <strong>Description:</strong> {book.description}
              </p>
              <p>{book.created_at}</p>
            </Col>
          </Row>
        </div>
      </Container>
      <Container id="comment-block">
        <h3>Comments</h3>
        <Comments bookId={book.id} />
      </Container>
    </>
  );
};

export default BookInfo;
