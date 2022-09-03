import React from 'react'

const SearchResults = ({results}) => {
  return (
    <div className='space-y-8'>
      {
        results?.map(({ link, title, description }, index) => (
          <div key={index} className="w-full text-lg lg:w-2/3">
        <a href={link} rel="noreferrer">
          <p className="text-sm">
            {link.length > 30 ? link.substring(0, 30) : link}
          </p>
              <p className="text-blue-800 font-semibold hover:underline dark:text-blue-300">
            {title}
          </p>
          <p className='text-sm'>{description.length > 180 ? `${description.substring(0, 180)}...` : description}</p>
        </a>
      </div>))
    }
    </div>
  )
}

export default SearchResults