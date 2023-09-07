import React from 'react'
import './ContTexto1.css'
import { motion } from 'framer-motion'

const ContTexto1 = () => {
  return (
    <div className='contenedor-cont'>
      <motion.div initial={{ scale: 0.1 }} whileHover={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 1 }} className='contenedor-cont-texto'>
        <p className='titulo1'> ¿Te imaginas cambiar tu composición corporal <span> sin hacer dietas</span> únicamente cambiando tus hábitos? </p>
        <p className='subtitulo1'>Ahora imagínate la <span> cantidad de dietas </span>restrictivas que hiciste sin tener ningún resultado.  </p>
        <br />
        <p className='subtitulo1'>Es por eso que si estás buscando perder peso y alcanzar tus objetivos de manera <span>saludable y segura </span> , seguir un método de alimentación es el mejor camino.</p>
      </motion.div>
    </div>
  )
}

export default ContTexto1
