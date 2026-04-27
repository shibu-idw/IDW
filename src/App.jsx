<<<<<<< HEAD
import React from 'react'
import Header from "./Components/Header/Header"
import Home from "./Pages/Home"
=======
import Services from "./Components/Services/Services";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import About from "./Pages/Aboutpage";
>>>>>>> parent of 49306d7 (Merge remote-tracking branch 'origin/gayu' into Raja)

const App = () => {
  return (
    <div>
<<<<<<< HEAD
      <Header/>
      <Home/>
    </div>
  )
}

export default App
=======
      <Services />
      {/* <Header /> */}
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      {/* </Routes> */}
    </div>
  );
};

export default App;
>>>>>>> parent of 49306d7 (Merge remote-tracking branch 'origin/gayu' into Raja)
