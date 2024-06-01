import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ <Login/> } />
      </Routes>
    </>
  );
}

export default App;
