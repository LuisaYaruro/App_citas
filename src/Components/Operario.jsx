import React from 'react'

export const Operario = () => {
  return (
    <div>
        <label>Ingresar Datos del Vehiculo y Conductor</label>
        <input type="text" placeholder='Placa del Vehiculo' />
        <input type="text" placeholder='Documento de Identidad del Conductor' />
        <button>Registrar</button>
    </div>
  )
}
