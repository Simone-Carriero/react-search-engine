export const fetchData = async (url) => {
  const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

  const options = {
    method: 'GET',
    headers: {
      'X-User-Agent': 'desktop',
      'X-Proxy-Location': 'EU',
      'X-RapidAPI-Key': '3ea8a1a6d8msha84c6c906df0269p126ed2jsnda7e8b21de36',
      'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
    }
  };




  const response = await fetch(`${baseUrl}${url}`, options);

  const data = await response.json();

  return data
};