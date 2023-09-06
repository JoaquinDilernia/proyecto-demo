import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from './Logo/logo.png'

const NavBar = () => {
  return (

    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        </div>
  )
}

export default NavBar
