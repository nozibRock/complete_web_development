import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(33);
  /* const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  } */
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>External Users</h2>
      <p> Total Users: {users.length}</p>
      {users.map((user) => (
        // <li> {user.name} </li>
        <User name={user.name} email={user.email}></User>
      ))}

      <User></User>
    </div>
  );
}

function User(props) {
  return (
    <div
      style={{ border: "2px solid megenta", padding: "20px", margin: "20px" }}
    >
      <li>Name: {props.name} </li>
      <p> Email: {props.email}</p>
    </div>
  );
}
export default App;

/* const products = [
    { name: "MSI Raider GE66", price: 489900 },
    { name: "Apple iPhone SE", price: 66603 },
    { name: "Fossil Gen 5", price: 77504 },
    { name: "ZENOTTIC Polarized Sunglasses", price: 17309 },
  ]; */

{
  /* <Product name="MSI Raider GE66" price="489900"></Product>
      <Product name="Apple iPhone SE" price="58900"></Product>
      <Product name="Fossil Gen 5" price="77504"></Product>
      {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))} */
}

/* function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price} </p>
    </div>
  );
} */
