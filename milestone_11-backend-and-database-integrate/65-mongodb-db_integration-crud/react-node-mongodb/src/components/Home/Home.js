import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleUserDelete = (id) => {
    const proceed = window.confirm("Are you sure you wanna delete?");
    if (proceed) {
      console.log("deleting user with id", id);
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted", data);
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2>Available Users: {users.length} </h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} :: {user.email}{" "}
            
            <Button as={Link} to={`/update/${user._id}`}>
              Update
            </Button>
            <button
              onClick={() => handleUserDelete(user._id)}
              className="border-0 bg-danger text-white rounded-circle"
            >
              X
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
