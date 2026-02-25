import React, { useState } from 'react'
import '../Styles/FormOperarioStyle.css'

const FormOperario = ({ onGuardar, onCancelar }) => {
  const [docConductor, setDocConductor] = useState('')
  const [matricula, setMatricula] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (docConductor.trim() && matricula.trim()) {
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

              <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                <button className='guardar'
                  type="submit"
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'rgb(124, 210, 124)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  Guardar
                </button>
                <button 
                  type="button"
                  onClick={onCancelar}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#ccc',
                    color: '#333',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  Cancelar
                </button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default FormOperario