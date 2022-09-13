import { createContext, useContext, useState } from "react"


const SearchContext = createContext({
  searchTerm: '',
  changeTerm: (term) => {}
})

export const SearchProvider = ({ children }) => {

  

  
  const [searchTerm, setSearchTerm] = useState('')
  
  

  const changeTerm = (term) => setSearchTerm(term)
  

  console.log(searchTerm)


  
  const value = {
    searchTerm,
    changeTerm,
  }
  
  return (
    <SearchContext.Provider value={value}>
    {children}
    </SearchContext.Provider>
    )
  }
  
  export const useSearchProvider = () => useContext(SearchContext)