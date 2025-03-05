import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/pages/home/home";
import React from 'react'
import Header from "./src/components/Header/Header";
import Filmes from './src/pages/home/Filmes/Filmes'

function Approuter() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/favoritos" element={<Filmes/>} />
   
   </Routes>
   </BrowserRouter>
  )
}

export default Approuter