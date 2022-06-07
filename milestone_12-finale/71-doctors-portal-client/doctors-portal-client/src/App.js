import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      {/* <button className="btn btn-primary rounded-full">Button</button> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
