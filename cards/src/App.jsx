import React from 'react'
import img from './img/img.jpg'
import './App.css'
import Ul from './ul.jsx'
import Button from './Button.jsx'

const App = () => {
  return (
    <div><h1>Anil Sidhu Todos</h1>
      <img id='img' src={img} alt="my-img" />
      <Ul/>
      <Button/>
    </div>
  )
}

export default App