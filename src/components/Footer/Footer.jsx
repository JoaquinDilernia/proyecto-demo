import React from 'react'
import './Footer.css'
import footer from './footer.png'
import {motion } from 'framer-motion'

import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (

    <motion.div initial={{ y:-50 }} whileHover={{ scale: 1.05 }} animate={{ y:0}} transition={{ duration: 1 }} className="footer">
      <div className="footer__container">
        <ul>
          <li><a href="https://www.instagram.com/"><BsInstagram /></a></li>
          <li><a href="https://www.whatsapp.com/"><BsWhatsapp /></a></li>
          <li><a href="#"><AiOutlineArrowUp /></a></li>
        </ul>
        </div>
        </motion.div>


        
  )
}

export default Footer
