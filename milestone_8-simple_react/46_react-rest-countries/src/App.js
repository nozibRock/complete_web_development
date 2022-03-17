import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      // .then((data) => console.log(data));
  }, [])
  
  return (
    <div>
      <h1>Visiting every Country of the World!!!</h1>
      <h3>Available Countries: {countries.length} </h3>
      {countries.map((country) => (
        <CountryDetails name={country.name.official}></CountryDetails>
      ))}
    </div>
  );
}
function CountryDetails(props) {
  
  return (
    <div>
      <h3> {props.name} </h3>
    </div>
  );
}
export default App;
