import { Movies } from "./pages/Movies"
import {Link, Outlet} from 'react-router-dom'
import React, { useState } from 'react';
import Navbar from "./components/Navbar"




function App() {


  return (
    <div className="app" style={{ 
      backgroundImage: `url("https://via.placeholder.com/500")` 
    }}>
     

      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
