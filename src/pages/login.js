import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, InputGroup, Button, Form } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { email, password };

    axios
      .post("http://localhost:5001/login", user)
      .then((response) => {
        alert(response.data);
        if (response.data == "Login successful") {
          localStorage.setItem("isAuthenticated", true)
          navigate("/");
        } else {
          alert("Login failed");
        }
      });
  };

  return (
    <Container id="container">
      <Row>
        <h3>Login</h3>
        <form className="mt-4" onSubmit={handleLogin}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Login"
              aria-label="Login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Password"
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>

          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
      </Row>
    </Container>
  );
}

export default Login;
