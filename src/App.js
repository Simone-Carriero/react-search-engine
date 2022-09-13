import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSearchProvider } from './contexts/SearchContext'
import Navbar from './pages/Navbar';
import Videos from './pages/Videos';
import Images from './pages/Images';
import News from './pages/News';
import Search from './pages/Search';
import SearchHomepage from './pages/SearchHomepage';







function App() {
  const { searchTerm } = useSearchProvider()
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='dark:bg-gray-900 dark:text-gray-200 min-h-screen'>

        <Routes>

          <Route path='/' element={searchTerm ? <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} /> : <SearchHomepage />}>

            <Route path='search' element={<Search />} />
            <Route path='video' element={<Videos />} />
            <Route path='image' element={<Images />} />
            <Route path='news' element={<News />} />

          </Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;