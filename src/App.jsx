import React from 'react'
import Services from './Components/Services/Services'
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import About from "./Pages/Aboutpage";

const App = () => {
  return (
    <div>
      <Services />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;