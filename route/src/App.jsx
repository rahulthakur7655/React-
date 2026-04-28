import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home' 
import button from './button'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contant" element={<contant />} />
        <Route path="./About" element={<About />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App