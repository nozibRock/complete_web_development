import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import './Login.css'

const Login = () => {
  return (
    <div>
      <Container>
        <Form className="w-50 my-5 mx-auto auth-form p-5">
          <h3 className="text-center">Login</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Your Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <div className="my-3">
            <Button variant="outline-dark">Sign in with google</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
