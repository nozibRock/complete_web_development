import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.name.value;

    const user = { name, email };

    // send data to the server
    fetch("http://localhost:5000/user/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
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
      <div className="w-50 mx-auto my-5">
      <h2>Please add a new User</h2>

        <form onSubmit={handleAddUser}>
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

          <Button type="submit">Add User</Button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
