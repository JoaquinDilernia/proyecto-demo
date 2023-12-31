import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Video from './components/Video/Video'
import ContTexto1 from './components/ContTexto1/ContTexto1'
import ContText2 from './components/ContText2/ContText2'


function App() {

  return (
    <>
    <NavBar />
      <Video />
      <ContTexto1 />
      <ContText2 />

      <Footer />
    </>
  )
}

export default App
