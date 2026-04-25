import React from 'react'
import Hero from "./../Components/Home/Hero"
import Vission from "./../Components/Home/Vission"
import Service from "./../Components/Home/Service"
import Process from "./../Components/Home/Process"
import Explore from "./../Components/Home/Explore"
import Form from "./../Components/Home/Form"
import FAQ from "./../Components/Home/Faq"
import Card from "./../Components/Home/service_card"


const Home = () => {
  return (
    <div>
      <Hero/>
      <Vission/>
      <Service/>
       <Card/>
      <Process/>
      <Explore/>
      <Form/>
      <FAQ/>
    </div>
  )
}

export default Home
