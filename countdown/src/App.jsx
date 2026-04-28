import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev === 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: count % 2 === 0 ? 'red' : 'black' }}>
        {count}
      </h1>
    </div>
  );
};

export default App;