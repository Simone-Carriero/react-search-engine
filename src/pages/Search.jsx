import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Answers from '../components/Answers'
import SearchResults from '../components/SearchResults'
import { useSearchProvider } from '../context/SearchContext'
import { fetchData } from '../utils/fetchData'


const Search = () => {
  const { searchTerm } = useSearchProvider()
  const [all, setAll] = useState({})
  const location = useLocation()

  useEffect(() => {
    fetchData(`${location.pathname}/q=${searchTerm}&num=40`)
      .then(res => setAll(res))
  }, [searchTerm])
  
  if(!all) return <div>Loading...</div>

  
  return (
    <div className="sm:px-56 p-10 flex flex-col gap-16">
      
      {
        all?.answers?.length ? <Answers answers={all.answers} /> : ''
      }
      
      
      <SearchResults results={all?.results} />
        
      

    </div>
  );
}
    

export default Search