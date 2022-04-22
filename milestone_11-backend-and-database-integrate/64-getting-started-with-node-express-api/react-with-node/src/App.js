import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = { name, email };

    // post data to server
    fetch("http://localhost:5000/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // console.log(name, email);
  };

  return (
    <div className="App">
      <h1> My own data: {users.length} </h1>
      <form action="" onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="submit" value="Add User" />
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name: {user.name} Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
