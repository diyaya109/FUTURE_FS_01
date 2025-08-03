// src/pages/Signup.js
import React from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import '../styles/Auth.css';

const Signup = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="auth-card shadow-lg p-4">
        <Card.Body>
          <h3 className="text-center mb-4 text-success fw-bold">Create an Account</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Signup;
