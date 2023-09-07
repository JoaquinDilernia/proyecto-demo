import React from 'react'
import img from './NutriveraLogos04.png'
import './ContText2.css'

import {motion} from 'framer-motion'

const ContText2 = () => {
  return (
    <div className='contenedor-cont-2'>
      <motion.div initial={{ y: -50 }} whileInView={{  y: 0 }} transition={{ duration: 2 }} className='contenedor-texto'>
        <p className='titulo'>Ni una dieta más, <span>hábitos para siempre</span> es un método práctico, efectivo</p>
      </motion.div>
      <motion.div initial={{ y: 50 }} whileInView={{  y: 0 }} transition={{ duration: 2 }} className='img-cont'>
        <img src={img} alt="" />
      </motion.div>
    </div>
  )
}

export default ContText2
