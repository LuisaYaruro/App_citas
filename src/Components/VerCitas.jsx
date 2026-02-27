import React, { useState } from 'react'
import { CitasMock } from '../Data/Citas'
import FormOperario from './FormOperario'
import '../Styles/Citas.css'

const VerCitas = () => {
  const [citas, setCitas] = useState(CitasMock)
  const [citaSeleccionada, setCitaSeleccionada] = useState(null)
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [mostrarRevision, setMostrarRevision] = useState(false)

  const handleSeleccionarCita = (cita) => {
    // abrir el detalle (no usado ahora)
    setCitaSeleccionada(cita)
  }

  const handleAsignar = (cita) => {
    setCitaSeleccionada(cita)
    setMostrarFormulario(true)
  }

  const handleRevisar = (cita) => {
    setCitaSeleccionada(cita)
    setMostrarRevision(true)
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
      <h1>Mis Citas</h1>
      <div className='listcitas'>
        {citas.map((cita) => (
          <div key={cita.id} className={`cardcita ${cita.estado.toLowerCase()}`}>
            <h3><strong className='titlePedido'>Pedido:</strong> {cita.id}</h3>
            <p><strong>Cliente:</strong> {cita.cliente}</p>
            <p><strong>Dirección:</strong> {cita.direccion}</p>
            <p><strong>Ciudad:</strong> {cita.ciudad}</p>
            <p><strong>Fecha:</strong> {cita.fecha}</p>
            <p><strong>Hora:</strong> {cita.hora}</p>
            <p><strong>Estado:</strong> {cita.estado}</p>
            <p><strong>Conductor:</strong> {cita.conductor || 'No asignado'}</p>
            <p><strong>Placa:</strong> {cita.placa || 'No asignada'}</p>

            {cita.estado === 'Aprobada' && !cita.conductor && (
              <button className="assign-btn" onClick={() => handleAsignar(cita)}>Asignar Conductor</button>
            )}

            {cita.conductor && cita.placa && (
              <span className="assigned-indicator">✓ Asignado</span>
            )}

            {cita.estado === 'Rechazado' && (
              <button className="review-btn" onClick={() => handleRevisar(cita)}>Revisar propuesta</button>
            )}
          </div>
        ))}
      </div>

      {mostrarFormulario && citaSeleccionada && (
        <div className="modal-container">
          <h4>Asignar Conductor para Cita #{citaSeleccionada.id}</h4>
          <FormOperario 
            onGuardar={(docConductor, matricula) => {
              const citasActualizadas = citas.map((c) => 
                c.id === citaSeleccionada.id ? { ...c, conductor: docConductor, placa: matricula } : c
              )
              setCitas(citasActualizadas)
              setMostrarFormulario(false)
              setCitaSeleccionada(null)
            }}
            onCancelar={() => {
              setMostrarFormulario(false)
              setCitaSeleccionada(null)
            }}
            opcional={false}
          />
        </div>
      )}

      {mostrarRevision && citaSeleccionada && (
        <div className="modal-container">
          <h4>Revisar propuesta - Cita #{citaSeleccionada.id}</h4>
          <p><strong>Cliente:</strong> {citaSeleccionada.cliente}</p>
          <p><strong>Detalles:</strong> {citaSeleccionada.direccion}, {citaSeleccionada.ciudad}</p>
          <div style={{ marginTop: 12 }}>
            <button className="cancelar" onClick={() => { setMostrarRevision(false); setCitaSeleccionada(null); }}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default VerCitas
