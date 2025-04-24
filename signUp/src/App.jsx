import React from "react"
import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
        <Route exact path="/signup" Component={Signup} />
    </Routes>
  </BrowserRouter>
 
  )
}

export default App;
