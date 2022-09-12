import React, {useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import lupita from '../assets/Lupita.png'
import Links from '../components/Links'
import { useSearchProvider } from '../contexts/SearchContext'


const Navbar = ({ darkTheme, setDarkTheme}) => {

  const {searchTerm, changeTerm} = useSearchProvider()

  const [search, setSearch] = useState(searchTerm)

  const navigate = useNavigate()
  

  const handleSearchSubmit = (e) => {
    e.preventDefault()

    if(search) return changeTerm(search)
  }

  const returnToHomepage = () => {
    sessionStorage.removeItem('searchTerm')
    navigate('/')
    window.location.reload();
  }
  

  return (
    <>
  
      <header className='flex flex-col items-center py-3 gap-4 min-w-full'>
        <div className='flex flex-col gap-2 w-full items-center md:flex-row md:justify-between'>

        
            <img src={lupita} alt="logo" className='w-24 pb-2 opacity-90 cursor-pointer' onClick={returnToHomepage} />
        
        

          <form onSubmit={handleSearchSubmit}>
            <input
              type="search"
              className=" text-black border-neutral-600 rounded-full bg-gray-200 w-44 p-2 outline-0 hover:shadow-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="🔎 Search Google or type URL"
            />
          
          </form>
         
          <button
            type='button'
            onClick={() => setDarkTheme(!darkTheme)}
            className='p-2'>
            {darkTheme ? "💡 Light" : "🌙 Dark"}
          </button>
        </div>

        <Links />
        
      </header>
      <Outlet />
    </>
  
  )
}

export default Navbar