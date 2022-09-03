import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchProvider } from '../context/SearchContext'
import lupita from '../assets/Lupita.png'

const SearchHomepage = () => {

  const [search, setSearch] = useState('')
  const {changeTerm} = useSearchProvider()

  
  

  const navigate = useNavigate()

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (search) {
      changeTerm(search)
      navigate('/search')
    }
  }

  return (
    <div className='grid place-content-center gap-10 min-h-screen text-center'>
      <img
        className=''
        src={lupita}
        alt="logo"
      />
      <form onSubmit={handleSearchSubmit}>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" border-neutral-600 rounded-full bg-zinc-300 w-72 p-2.5 outline-0
          " />
      </form>
    </div>
  )
}

export default SearchHomepage