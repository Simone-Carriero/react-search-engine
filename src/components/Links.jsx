import React from 'react'
import { NavLink } from 'react-router-dom'

import { navLinks } from '../constants/navLinks'

const Links = ({searchTerm}) => {
  return (
    <nav className='flex gap-4'>
      {
        navLinks.map(({ url, name }) => (
          <NavLink
            className="text-blue-700 border-b-2 dark:text-blue-300 hover:border-blue-700 pb-2"
            key={url}
            to={`${url}/q=${searchTerm}`}
          >
            {name}
          </NavLink>
        ))
      }
    </nav>
  )
}

export default Links