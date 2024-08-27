import React, { useState, useEffect } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuthState = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(storedAuthState === "true");
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <>
      <Navbar bg="light" data-bs-theme="light" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt="Books List"
              src="/img/book-outline.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Books
          </Navbar.Brand>
          <Navbar.Collapse className="d-flex justify-content-end">
            {isAuthenticated ? (
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Button
                  id="loginButton"
                  variant="outline-primary"
                  type="button"
                  className="hidden me-2"
                  href="/login"
                >
                  Login
                </Button>
                <Button
                  id="registerButton"
                  variant="primary"
                  type="button"
                  className="hidden me-2"
                  href="/register"
                >
                  Register
                </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
