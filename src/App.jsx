import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Division from './Pages/Division'
import Header from "./Components/Header/Header"
import Home from "./Pages/Home"
import Services from './Components/Home/Service'

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/division" element={<Division />} />
      </Routes>

    </Router>
  )
}

export default App
