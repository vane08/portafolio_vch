import React from 'react'
import { useParams } from 'react-router-dom'

const ContactoDinamico = () => {
    const {nombre, apellido} = useParams();
    // const {apellido} = useParams();
  return (
    <div>Hola {nombre} {apellido} </div>
  )
}

export default ContactoDinamico