import "./App.css";
import Countries from "./components/Countries/Countries";
import Header from "./components/Header/Header";
import Person from "./components/Person/Person";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Person></Person>
    </div>
  );
}

export default App;
