import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { getAuth } from "firebase/auth";
import app from './firebase.init';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {

  const handleEmailBlur = (event) => {
    console.log(event.target.value);
  }
  const handlePasswordBlur = (event) => {
    console.log(event.target.value);
  }
  const handleFormSubmit = event => {
    event.preventDefault();
    console.log('form submitted');
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
