import React, { useState } from 'react'
import TopNavBar from './components/navbar/TopNavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Gallery from './pages/Gallerys'
import About from './pages/About'
import GoTop from './components/navbar/GoTop'
import Loading from './components/Loading/Loading'
import Footer from './components/footer/Footer'
import Appointment from './pages/Apponitment'
import DetailPage from './pages/DetailPage'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  window.onload = () => {
    setIsLoading(false);
  };

  return (
    <>
    {isLoading ?
    <Loading/>
    :
    <div>
      <TopNavBar/>
      <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Service/>} path='/service'/>
      <Route element={<About/>} path='/about'/>
      <Route element={<Gallery/>} path='/gallery'/>
      <Route element={<Contact/>} path='/contact'/>
      <Route element={<Appointment/>} path='/appointment'/>
      <Route element={<DetailPage/>} path='/service/:id'/>
    </Routes>
    <GoTop/>
    <Footer/>
    </div>}
    </>
  )
}

export default App