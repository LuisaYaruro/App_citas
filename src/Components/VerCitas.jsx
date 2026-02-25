import React, { useState } from 'react'
import { CitasMock } from '../Data/Citas'
import FormOperario from './FormOperario'
import '../Styles/Citas.css'

const VerCitas = () => {
  const [citas, setCitas] = useState(CitasMock)
  const [citaSeleccionada, setCitaSeleccionada] = useState(null)
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const handleSeleccionarCita = (cita) => {
    if (cita.estado === 'Aprobada') {
      setCitaSeleccionada(cita)
      setMostrarFormulario(true)
    }
  }

  const handleGuardarOperario = (docConductor, matricula) => {
    const citasActualizadas = citas.map((cita) => 
      cita.id === citaSeleccionada.id 
        ? { ...cita, conductor: docConductor, placa: matricula }
        : cita
    )
    setCitas(citasActualizadas)
    setMostrarFormulario(false)
    setCitaSeleccionada(null)
  }

  return (
    <div>
      <h3>Ver Citas</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className='title' >ID</th>
                <th className='title' >Paciente</th>
                <th className='title' >Fecha</th>
                <th className='title' >Hora</th>
                <th className='title' >Conductor</th>
                <th className='title' >Placa</th>
                <th className='title' >Estado</th>
                <th className='title' >Acción</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita) => (
                <tr key={cita.id}>
                  <td className='content' data-label="ID">{cita.id}</td>
                  <td className='content' data-label="Paciente">{cita.cliente}</td>
                  <td className='content' data-label="Fecha">{cita.fecha}</td>
                  <td className='content' data-label="Hora">{cita.hora}</td>
                  <td className='content' data-label="Conductor">{cita.conductor || 'No asignado'}</td>
                  <td className='content' data-label="Placa">{cita.placa || 'No asignada'}</td>
                  <td className='content' data-label="Estado">{cita.estado}</td>
                  <td className='content' data-label="Acción">
                    {cita.estado === 'Aprobada' && !cita.conductor && (
                      <button 
                        onClick={() => handleSeleccionarCita(cita)}
                        style={{
                          padding: '4px 8px',
                          backgroundColor: 'rgb(124, 210, 124)',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '0.75rem'
                        }}
                      >
                        Asignar
                      </button>
                    )}
                    {cita.conductor && (
                      <span style={{ color: 'green', fontSize: '0.75rem' }}>✓ Asignado</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {mostrarFormulario && citaSeleccionada && (
          <div style={{
            marginTop: '20px',
            padding: '15px',
            border: '1px solid rgb(124, 210, 124)',
            borderRadius: '6px',
            backgroundColor: '#f9f9f9'
          }}>
            <h4>Asignar Conductor para Cita #{citaSeleccionada.id}</h4>
            <FormOperario 
              onGuardar={handleGuardarOperario}
              onCancelar={() => {
                setMostrarFormulario(false)
                setCitaSeleccionada(null)
              }}
            />
          </div>
        )}
    </div>
  )
}

export default VerCitas
