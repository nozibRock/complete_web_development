import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";
import Header from "./components/Header/Header";
import Person from "./components/Person/Person";

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Header></Header>
      <Countries></Countries>
      <Person></Person>
    </div>
  );
}
/* function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
    // .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Visiting every Country of the World!!!</h1>
      <h3>Available Countries: {countries.length} </h3>
      {countries.map((country) => (
        <CountryDetails
          name={country.name.official}
          population={country.population}
          area={country.area}
        ></CountryDetails>
      ))}
    </div>
  );
}
function CountryDetails(props) {
  return (
    <div>
      <h3> {props.name} </h3>
      <p>Total Area: {props.area} </p>
      <p>Total Population: {props.population} </p>
    </div>
  );
} */
export default App;
