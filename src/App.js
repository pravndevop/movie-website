import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Error from './Error'
import "./App.css"

const App = () => {
  return (
    <>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    
    <Route path='*' element={<Error/>}/>
    </Routes>
    
    </>
  )
}

export default App
