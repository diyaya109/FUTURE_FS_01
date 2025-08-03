// src/pages/Login.js
import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import '../styles/Auth.css';

const Login = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="auth-card shadow-lg p-4">
        <Card.Body>
          <h3 className="text-center mb-4 text-primary fw-bold">Login to ShopSmart</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
