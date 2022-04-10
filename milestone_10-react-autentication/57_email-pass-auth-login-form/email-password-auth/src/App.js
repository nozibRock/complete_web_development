import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase.init';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useState } from 'react';

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState();

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  }
  const handleFormSubmit = event => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        // ..
        console.error(error)
      });
    event.preventDefault();

    console.log("form submitted", email, password);
  }
  return (
    <div>

      <div className="registration w-50 mx-auto my-5">
        <h2 className="text-primary">
          Please {/* {registered ? "Login" : "Register"} */} Register !!
        </h2>
        <Form onSubmit={handleFormSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="my-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onBlur={handleEmailBlur}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              onBlur={handlePasswordBlur}
            />
          </FloatingLabel>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
