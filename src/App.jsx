import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Division from './Pages/Division'
import Header from "./Components/Header/Header"
import Home from "./Pages/Home"
import About from "./Pages/Aboutpage"
import Footer from './Components/Footer/Footer'
import Contact from "./Components/Contact/contactus"
import PrivatePolicy from "./Components/PrivatePolicy/PrivatePolicy"
import Terms from "./Components/Terms/Terms"

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/division" element={<Division />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivatePolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App