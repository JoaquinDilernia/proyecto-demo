import React from 'react'
import './Video.css'

const Video = () => {
  return (
    <div className="contenedor-inicio">
        <div className='contenedor-texto'>
            <p className='titulo'>Es posible bajar de peso de <span>forma saludable</span> y mantenerlo para siempre</p>
            <p className='subtitulo'>Descrubri por que <span>las dietas que prohiben alimentos</span> no son la solucion para cambiar de habitos</p>
        </div>
        <div className="contenedor-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WXcJr7fSugU?si=vxWUs-vpJ9OKJe9V" title="YouTube video player"   allowfullscreen></iframe>
        </div>
    </div>
)
}

export default Video
