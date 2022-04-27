import React, { useEffect, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setuser] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setuser(data));
  }, []);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const updatedUser = { name, email };

    // send data to the server
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        alert("users added successfully!!!");
        event.target.reset();
      });
  };

  return (
    <div>
      <h2>Updating User: {user.name}</h2>
      <small>User id: {user._id}</small>
      <p>User email: {user.email}</p>

      <div className="w-50 mx-auto my-5">
        <Form onSubmit={handleUpdateUser}>
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              required
            />
          </FloatingLabel>

          <Button type="submit">Update User</Button>
        </Form>
      </div>
    </div>
  );
};

export default UpdateUser;
