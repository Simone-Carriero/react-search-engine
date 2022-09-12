import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSearchProvider } from '../contexts/SearchContext'
import useFetchData from '../hooks/useFetchData'
import ReactPlayer from 'react-player/lazy'
import Spinner from '../components/Spinner'

const Videos = () => {
  const { searchTerm } = useSearchProvider()

  const location = useLocation()

  const { result, isLoading, isError
  } = useFetchData(`${location.pathname}/q=${searchTerm}`)


  return (
    <div className='space-y-20 p-6 md:p-14 xl:px-52'>
      {isLoading && <Spinner />}


      {isError && <div>Error...</div>}

      {
        result?.results?.map((video, i) => (
          <div key={i} className='space-y-4'>
            <div>
              <span>{video?.cite?.domain?.replace('title', video?.title)}</span>
              <h2 className='text-xl'>{video?.title}</h2>
            </div>
            <div className='flex flex-col items-center gap-5 md:flex-row md:gap-16'>
              <ReactPlayer controls width={'355px'} height={'200px'} url={video?.additional_links?.[0]?.href} />
              <p className='text-center break-words md:w-44 xl:w-56'>
                {video?.description?.length > 100 ? `${video.description.substring(0, 100)}...` : video.description}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Videos