import React from 'react'
import './Video.css'

import { motion } from 'framer-motion'

const Video = () => {
  return (
    <div className="contenedor-inicio">
        <motion.div initial={{ x: -50 }} animate={{  x: 0 }} transition={{ duration: 2 }} className='contenedor-texto'>
            <p className='titulo'>Es posible bajar de peso de <span>forma saludable</span> y mantenerlo para siempre</p>
            <p className='subtitulo'>Descrubri por que <span>las dietas que prohiben alimentos</span> no son la solucion para cambiar de habitos</p>
            <a href=""> QUIERO CAMBIAR MIS HABITOS </a>
        </motion.div>
        <motion.div  initial={{ x: 50 }} animate={{  x: 0 }} transition={{ duration: 2 }}className="contenedor-video">
        <iframe src="https://www.youtube.com/embed/WXcJr7fSugU?si=vxWUs-vpJ9OKJe9V" title="YouTube video player"  ></iframe>
        </motion.div>
    </div>
)
}

export default Video
