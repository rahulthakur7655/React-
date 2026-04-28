import React, { useState, useMemo, useCallback, useEffect } from 'react';
import './App.css';

const App = () => {
  const [num, setNum] = useState(5)

const value = useMemo(() => {
  console.log("its reused")
  return num * 2
}, [num])

  const handleClick = useCallback(() => {
    console.log(value);
  }, [value])

  useEffect(() => {
    console.log("Updated")
  }, [value])

  return (
    <div>
     <h1>Value: {value}</h1>
      <button onClick={handleClick}>value</button>
      <button onClick={() => {
  setNum(prev => (prev < 30 ? prev + 1 : prev))
}}>
  Increase
</button>
      <button onClick={() => setNum(prev => (prev > -30 ? prev - 1 : prev))}>Decrease</button>
    </div>
  )
}

export default App;