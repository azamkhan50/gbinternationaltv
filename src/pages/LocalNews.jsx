import React from 'react'
import SkarduNews from '../components/Shows'
import GbEducationNews from '../components/GbEducationNews'
import GbTourismNews from '../components/GBTourismNews'

const LocalNews = () => {
  return (
    <div className='m-20'>
      <SkarduNews/>
      <GbEducationNews/>
      <GbTourismNews/>
    </div>
  )
}

export default LocalNews
