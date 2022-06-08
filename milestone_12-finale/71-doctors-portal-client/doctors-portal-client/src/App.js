import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Loading from "./Pages/Shared/Loading/Loading";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div className="max-w-7xl mx-auto px-12">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
