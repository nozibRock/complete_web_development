import { useEffect, useState } from "react";
import "./App.css";
import Posts from "./components/Posts/Posts";
import "bootstrap/dist/css/bootstrap.min.css";
import Mobile from "./components/Mobile/Mobile";

function App() {
  return (
    <div className="container my-5 App">
      <Mobile></Mobile>
      <Posts></Posts>
      <LoadPosts></LoadPosts>
      <District
        name="Rangamati"
        division="Chittagong"
        area="6116"
        population="595979"
      ></District>
      <District
        name="Chittagong"
        division="Chittagong"
        area="5283"
        population="7616352"
      ></District>
      <District
        name="Bandarban"
        division="Chittagong"
        area="4479"
        population="388335"
      ></District>
      <District
        name="Khulna"
        division="Khulna"
        area="4394"
        population="2318527"
      ></District>
      <District
        name="Mymensingh"
        division="Mymensingh"
        area="4363"
        population="5110272"
      ></District>
    </div>
  );
}
function LoadPosts(props) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {posts.map((post) => (
        <Post title={post.title} body={post.body} key={post.id}></Post>
      ))}
    </div>
  );
}

function Post(props) {
  return (
    <div
      style={{
        margin: "20px",
        padding: "10px",
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
        borderRadius: "max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px",
      }}
    >
      <h4 style={{textTransform: 'capitalize'}}> {props.title} </h4>
      <p> {props.body} </p>
    </div>
  );
}
function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower)
  };

  
  return (
    <div className="district">
      <h3>
        District Name: <span>{props.name}</span>
      </h3>
      <p>Division: {props.division} </p>
      <p>Area: {props.area} </p>
      <p>Population: {props.population} </p>
      <h4>Power: {power} </h4>
      <button onClick={boostPower}>Boost the Power</button>
    </div>
  );
}

export default App;
