
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NewsDetails from './components/NewsDetails'
import TrendingDetails from './pages/TrendingDetails'
import InternationalNews from './components/InternationalNews'
import Contact from './pages/Contact'
import LocalNews from './pages/LocalNews'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news/:id' element={<TrendingDetails />} />
        <Route path='/about' element={<About />} />
         <Route path='/contact' element={<Contact />} />
            <Route path='/news' element={<News />} />
             <Route path='/local-news' element={<LocalNews />} />
        <Route path='/international-news' element={<InternationalNews />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

