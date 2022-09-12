import React from 'react'
import { useLocation } from 'react-router-dom'
import Answers from '../components/Answers'
import SearchResults from '../components/SearchResults'
import { useSearchProvider } from '../contexts/SearchContext'
import useFetchData from '../hooks/useFetchData'
import Spinner from '../components/Spinner'



const Search = () => {
  const { searchTerm } = useSearchProvider()
  const location = useLocation()

  const { result, isLoading, isError
} = useFetchData(`${location.pathname}/q=${searchTerm}`)

  if (isLoading) return <Spinner />

  
  return (
    <div className="sm:px-56 p-10 flex flex-col gap-16">
      
      
      

      { isError && <div>Error...</div> }
      
      {
        result?.answers?.length ? <Answers answers={result.answers} /> : ''
      }
      
      
      <SearchResults results={result?.results} answers={result?.answers?.length ? result.amswers : null} />
        
      

    </div>
  );
}
    

export default Search