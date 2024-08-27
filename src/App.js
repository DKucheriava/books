import React from "react";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Register from "./pages/register";
import BookInfo from "./pages/book-info";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import BookCard from "./components/bookCard";

export default function BookList() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book-info/:id" element={<BookInfo />} />
        </Routes>
      </div>
    </>
  );
}

function MainPage() {
  return (
    <Container id="container">
      <BookCard />
    </Container>
  );
}
