import React from 'react'
import { useLocation } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useSearchProvider } from '../contexts/SearchContext'
import useFetchData from '../hooks/useFetchData'

const Images = () => {
  const { searchTerm } = useSearchProvider()

  const location = useLocation()

  const { result, isLoading, isError
  } = useFetchData(`${location.pathname}/q=${searchTerm}`)

  
  return (
    <div className='flex flex-wrap justify-center items-center gap-5 py-6 xl:p-6'>
      
      {isLoading && <Spinner />}


      {isError && <div>Error...</div>}

      {
        result?.image_results?.map(({ image, link }, i) => (
          <div key={i} className='flex-grow'>
            <a className='hover:underline' href={link?.href}>
              <img className='my-0 mx-auto' src={image?.src} alt={image?.alt} loading='lazy' />
              <p className='w-36 break-words text-sm'>{link?.title?.length > 20 ? `${link?.title?.substring(0, 20)}...` : link?.title}</p>
            </a>
          </div>
        ))
      }
    </div>
  )
}

export default Images