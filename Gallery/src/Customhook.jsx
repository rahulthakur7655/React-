import { useEffect, useState } from 'react';

export default function useFetch() {
  const [data, setData] = useState([])
  const [url, setUrl] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return;

    const Api = async () => {
      try {
    
        const res = await fetch(url)
        const result = await res.json()
        setData(result)
        setError(null)
      } catch (err) {
        setError("Something went wrong")
      } 
    };

    Api()
  }, [url])

  return { data, error, setUrl }
}