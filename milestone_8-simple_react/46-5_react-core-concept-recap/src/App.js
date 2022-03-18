import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
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

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower)
  };
  return (
    <div className="district">
      <h3>
        {" "}
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
