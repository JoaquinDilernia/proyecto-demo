import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Video from './pages/Video/Video'


function App() {

  return (
    <>
    <NavBar />
      <Video />

      <Footer />
    </>
  )
}

export default App
