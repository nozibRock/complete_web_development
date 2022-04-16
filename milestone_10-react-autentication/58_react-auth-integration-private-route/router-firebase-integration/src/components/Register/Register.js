import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Register.css'

const Register = () => {
    return (
      <div className="register">
        <Container>
          <Form className="w-50 my-5 mx-auto auth-form p-5">
            <h3 className="text-center">Please Register now</h3>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Container>
      </div>
    );
};

export default Register;