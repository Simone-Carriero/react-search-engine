import React from 'react'
import { useLocation } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useSearchProvider } from '../contexts/SearchContext'
import useFetchData from '../hooks/useFetchData'


const News = () => {
  const { searchTerm } = useSearchProvider()
  const location = useLocation()

  const { result, isLoading, isError
  } = useFetchData(`${location.pathname}/q=${searchTerm}`)

  


  return (
    <div className="sm:px-56 p-10 flex flex-col gap-16">
      
      {isLoading && <Spinner />}


      {isError && <div>Error...</div>}


      {
        result?.entries?.map((item, i) => (

          <div key={i}>
            <a href={item?.source?.href}>{item?.source?.title}</a>
            <div>
              <a href={item?.link} className='text-xl text-blue-800 font-semibold hover:underline dark:text-blue-300'>{item?.title?.length > 60 ? `${item.title.substring(0, 60)}...` : item.title}</a>
            </div>
            <span>{item?.published}</span>
          </div>

        ))
      }


    </div>
  );
}


export default News