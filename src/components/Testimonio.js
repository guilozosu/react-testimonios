// 1) importamos...
import React from 'react'
import '../stylesheets/Testimonio.css';

// 2) definimos la función con su html
export function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require(`../images/${props.imagen}.png`)}
      alt='Foto de Shawn'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <span className='negrita'>{props.nombre}</span> en <span className='negrita'>{props.pais}</span>
        </p>
        <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}