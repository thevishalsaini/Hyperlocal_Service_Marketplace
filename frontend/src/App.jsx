import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login'
import Footer from './components/Footer.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Beauty from './pages/Beauty.jsx'
import Home from './pages/Home.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/beauty' element={<Beauty />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
