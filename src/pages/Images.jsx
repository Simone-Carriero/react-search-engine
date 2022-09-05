import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { useSearchProvider } from '../context/SearchContext'
import { fetchData } from '../utils/fetchData'

const Images = () => {
  const { searchTerm } = useSearchProvider()
  const [images, setImages] = useState([])

  const location = useLocation()

  useEffect(() => {
    fetchData(`${location.pathname}/q=${searchTerm}&num=40`)
      .then(res => setImages(res.image_results))
  }, [searchTerm])

  
  return (
    <div className='flex flex-wrap justify-center items-center gap-5 py-6 xl:p-6'>
      {
        images?.map(({ image, link }, i) => (
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