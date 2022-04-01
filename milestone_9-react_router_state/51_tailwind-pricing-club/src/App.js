import "./App.css";
import Header from "./components/Header/Header";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h2 className="text-2xl">Welcome to my pricing club</h2>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
