import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSearchProvider } from '../context/SearchContext'
import { fetchData } from '../utils/fetchData'


const News = () => {
  const { searchTerm } = useSearchProvider()
  const [news, setNews] = useState([])
  const location = useLocation()

  useEffect(() => {
    fetchData(`${location.pathname}/q=${searchTerm}&num=40`)
      .then(res => setNews(res.entries))
  }, [searchTerm])

  


  return (
    <div className="sm:px-56 p-10 flex flex-col gap-16">


      {
        news?.map((item, i) => (

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