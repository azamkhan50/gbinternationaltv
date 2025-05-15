import React from 'react'
import NewsFeed from '../components/NewsFeed'
import SkarduNews from '../components/Shows'
import AllPakNews from '../components/AllPakNews'
import InternatioanlVideoNews from '../components/InternationalVideoNews'

const News = () => {
  return (
    <div className='m-20'>
   <NewsFeed/>
   <SkarduNews/>
   <AllPakNews/>
   <InternatioanlVideoNews/>
    </div>
  )
}

export default News
