import React, { useState } from 'react'
import '../Styles/FormOperarioStyle.css'

const FormOperario = ({ onGuardar, onCancelar, opcional = false }) => {
  const [docConductor, setDocConductor] = useState('')
  const [matricula, setMatricula] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (opcional || (docConductor.trim() && matricula.trim())) {
      onGuardar(docConductor, matricula)
      setDocConductor('')
      setMatricula('')
    } else {
      alert('Por favor completa todos los campos')
    }
  }

  return (
    <div>
        <div className='FormO'>
            <form onSubmit={handleSubmit}>
              <label>Ingrese el documento de identidad del conductor:</label>
              <input 
                type="text" 
                name="docConductor" 
                id="docConductor"
                value={docConductor}
                onChange={(e) => setDocConductor(e.target.value)}
                placeholder="Ej: 1234567890"
                required
              />

              <label>Ingrese la matrícula del vehículo:</label>
              <input 
                type="text" 
                name="matricula" 
                id="matricula"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
                placeholder="Ej: ABC-1234"
                required
              />

              <div className="form-buttons">
                <button className="guardar" type="submit">
                  Guardar
                </button>
                <button className="cancelar" type="button" onClick={onCancelar}>
                  Cancelar
                </button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default FormOperario