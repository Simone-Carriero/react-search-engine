import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSearchProvider } from '../context/SearchContext'
import { fetchData } from '../utils/fetchData'
import ReactPlayer from 'react-player/lazy'

const Videos = () => {
  const { searchTerm } = useSearchProvider()
  const [videos, setVideos] = useState([])

  const location = useLocation()

  useEffect(() => {
    fetchData(`${location.pathname}/q=${searchTerm}&num=40`)
      .then(res => setVideos(res.results))
  }, [searchTerm])


  return (
    <div className='space-y-20 p-6 md:p-14 xl:px-52'>
      {
        videos?.map((video, i) => (
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