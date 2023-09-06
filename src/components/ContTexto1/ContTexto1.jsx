import React from 'react'
import './ContTexto1.css'
import { motion } from 'framer-motion'

const ContTexto1 = () => {
  return (
    <div className='contenedor-cont'>
      <motion.div initial={{ scale: 0.1 }} whileHover={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 1 }} className='contenedor-cont-texto'>
        <p> ¿Te imaginas cambiar tu composición corporal <span> sin hacer dietas</span> únicamente cambiando tus hábitos? </p>
      </motion.div>
    </div>
  )
}

export default ContTexto1
