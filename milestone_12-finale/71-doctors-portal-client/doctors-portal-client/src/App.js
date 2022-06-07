import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Loading from "./Pages/Shared/Loading/Loading";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      {/* <button className="btn btn-primary rounded-full">Button</button> */}
      <Suspense fallback={<Loading />}>
        <div className="max-w-7xl mx-auto px-12">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
