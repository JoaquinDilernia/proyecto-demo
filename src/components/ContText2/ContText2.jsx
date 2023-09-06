import React from 'react'
import img from './NutriveraLogos04.png'
import './ContText2.css'

const ContText2 = () => {
  return (
    <div className='contenedor-cont-2'>
      <div className='texto-cont'>
        <p>Ni una dieta más, <span>hábitos para siempre</span> es un método práctico, efectivo</p>
      </div>
      <div className='img-cont'>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default ContText2
