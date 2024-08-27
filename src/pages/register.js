import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Row, InputGroup, Button, Form } from "react-bootstrap";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password, email };

    axios
      .post("http://localhost:5001/register", { username, password, email })
      .then((response) => {
        alert(response.data);
        if (response.data == "User registered successfully") {
          navigate("/");
        }
      });
  };
  return (
    <Container id="container">
      <Row>
        <h3>Register</h3>
      </Row>
      <Row>
        <form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-label="Username"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
            />
          </InputGroup>
          <Button type="submit" variant="primary">
            Register
          </Button>
        </form>
      </Row>
    </Container>
  );
};

export default Register;
