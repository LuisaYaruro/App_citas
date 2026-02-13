import React from 'react'
import '../Styles/FormOperarioStyle.css'

const FormOperario = () => {
  return (
    <div>
        <div className='FormO'>
            <label>Ingrese el documento de indentidad del conductor:</label>
            <input type="text" name="docConductor" id="docConductor" />

            <label>Ingrese la matricula del vehículo:</label>
            <input type="text" name="matricula" id="matricula" />            
        </div>
    </div>
  )
}

export default FormOperario