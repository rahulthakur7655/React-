import React,{useState} from 'react'
const counts = () => {
    const [X,setX] = useState(0)
  return (
    <div className='count'>
      <div className='count1'>
    <h1>{X}</h1>
    <button onClick={() =>{setX(X + 1)}}> incrase</button>
    </div>
    </div>
  )
}

export default counts