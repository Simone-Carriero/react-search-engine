import {useState, useEffect} from 'react'

const useFetchData = (url) => {

  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(null)

  const fetchData = async (url) => {
    const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

    const options = {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Key': 'a764207fa0msha699b3e3b9d8321p1e9a2bjsnc46887475e38',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
      }
    };


    setIsLoading(true)

    try {

      const response = await fetch(`${baseUrl}${url}&num=40`, options);

      const data = await response.json();

      setResult(data)
    } catch (error) {
      setIsError(error)
    } finally {
      setIsLoading(false)
    }

  };

  useEffect(() => {
    fetchData(url)
  }, [url])
  

  return {result, isLoading, isError}
}

export default useFetchData