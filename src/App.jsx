import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Division from './Pages/Division'
import Header from "./Components/Header/Header"
import Home from "./Pages/Home"
import About from "./Pages/Aboutpage"
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/division" element={<Division />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App