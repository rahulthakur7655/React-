import React, { useEffect } from 'react';
import useFetch from './Customhook';
import './App.css'

const App = () => {
  const { data,  error, setUrl } = useFetch()

  useEffect(() => {
    setUrl("https://picsum.photos/v2/list?page=1&limit=100")
  }, [data])

  if (error){ return <h2>{error}</h2>}

  return (
    <>
       <header className="header">
        <h1>Image Gallery</h1>
      </header>
<div className="gallery">
      {data.map((item) => (
       <a href={item.url} target="_blank" rel="noopener noreferrer">
  <img
    key={item.id}
    src={item.download_url}
    alt={item.author}
  />
</a>
      ))}
    </div>
    <footer className="footer">
        <p>Image Gallery Built with React</p>
      </footer>
    </>
  );
};

export default App;