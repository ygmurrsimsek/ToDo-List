// import React from 'react'
import { Route,Routes } from "react-router-dom"
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Kayit from "../pages/Kayit";
function config() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<SignUp/>}></Route>
        <Route path="/kayit" element={<Kayit/>}></Route>

      </Routes>
    </div>
  )
}

export default config
