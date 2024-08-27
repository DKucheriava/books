import React from "react";
import { useState, useEffect } from "react";
import { Button, Row, Card, Col, Container } from "react-bootstrap";

const BookCard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/getBooks")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBooks(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  const handleMoreClick = (book) => {
    sessionStorage.setItem("selectedBook", JSON.stringify(book));
    window.location.href = `/book-info/${book.id}`;
  };

  return (
    <Container fluid>
    <Row md={4} lg={3} className="g-4">
      {books.map((book, id) => (
        <Col key={id}>
          <Card key={id} style={{ width: "18rem", marginBottom: "3rem", height: "100%", marginBottom: "1rem", display: "flex", flexDirection: "column" }}>
            <Card.Img
              variant="top"
              src={`/img/${book.cover_image}`}
              alt={`Cover image for ${book.title}`}
            />
            <Card.Body style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <Card.Title>
                <b>{book.title}</b>
              </Card.Title>
              <Card.Title>{book.description}</Card.Title>
              <div style={{ marginTop: "auto", textAlign: "center" }}>
              <Button onClick={() => handleMoreClick(book)}>More</Button>
              </div>
            </Card.Body>
          </Card>
          </Col>
      ))}
    </Row>
    </Container>
  );
};

export default BookCard;
