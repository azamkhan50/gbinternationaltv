
import React from 'react'
import Navbar from '../components/Navbar'
import TopNewsSlider from '../components/TopNews'
import NewsList from '../components/NewsFeed'
import TrendingNews from '../components/TrendingNews'
import ToInternatioalNews from '../components/TopInternatioanlNew'
import BlogInfo from '../components/Blog'
import SkarduNews from '../components/Shows'

const Home = () => {
  return (
    <div>
     
      <TopNewsSlider/>
       {/* <NewsList /> */}
       <ToInternatioalNews/>
    
      
      <SkarduNews/>
        <TrendingNews/>
    
    </div>
  )
}

export default Home
