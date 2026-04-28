import React from 'react'
import {arr} from './component/Array.js'

const App = () => {
  return (
    <div><ul>{arr.map((v,i)=>{return <li key={i}>{v}</li>})}</ul></div>
  )
}

export default App