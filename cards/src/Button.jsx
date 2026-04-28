import React, { useState } from 'react'

const Button = () => {
  let [fruit,setfruit] = useState("Apple")

    let callfun = () => {
      setfruit(fruit == "Apple"? "Mango":fruit == "Mango"? "Banana":"Apple")
      console.log({fruit})
    }
  return (
    <>
    <h1>{fruit}</h1>
    <button onClick={callfun}>Click</button>
    </>
  )
}

export default Button