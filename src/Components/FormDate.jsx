
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../Styles/FormDateStyle.css'
import { CiCalendarDate } from "react-icons/ci";
import FormOperario from './FormOperario';


const FormDate = () => {
  const [fecha, setFecha] = useState(null);
  const [horaSeleccionada, setHoraSeleccionada] = useState(null);
  const datePickerRef = useRef(null);

  // Array completo de horas disponibles (8:00 a 15:30 en formato 24h)
  const horas = [
    "08:00", "09:30", "11:00", "12:30", "14:00", "15:30"
  ];

  // Helper: convierte "HH:MM" a minutos desde medianoche
  const aMinutos = (hhmm) => {
    const [h, m] = hhmm.split(":").map(Number);
    return h * 60 + m;
  };

  // Si es viernes (getDay() === 5) limitar horas hasta 12:30
  const horasDisponibles = fecha && fecha.getDay() === 5
    ? horas.filter((h) => aMinutos(h) <= aMinutos("12:30"))
    : horas;

  // Fecha de hoy (solo futuras)
  const hoy = new Date();

  // Función para desabilitar sábados y domingos
  const diasDeshabilitados = (date) => {
    const dia = date.getDay(); // 0 domingo, 6 sábado
    return dia === 0 || dia === 6; // Deshabilitar domingo y sábado
  };

  return (
    <div className="form-date-container">
      <label>Seleccione una fecha:</label>
      <div className="date-input-wrapper">
        <DatePicker
          ref={datePickerRef}
          selected={fecha}
          onChange={(date) => { setFecha(date); setHoraSeleccionada(null); }}
          minDate={hoy}
          filterDate={(date) => !diasDeshabilitados(date)}
          excludeDates={[]}
          placeholderText="  / /    "
          dateFormat="dd/MM/yyyy"
          className="date-picker-input"
        />
        <CiCalendarDate
          className="calendar-icon"
          role="button"
          tabIndex={0}
          aria-label="Abrir calendario"
          onClick={() => datePickerRef.current && datePickerRef.current.setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              datePickerRef.current && datePickerRef.current.setOpen(true);
            }
          }}
        />
      </div>

      {/* Mostrar selector de horas solo si se seleccionó una fecha */}
      {fecha && (
        <div className="horas-container">
          <label>Seleccione una hora:</label>
          <div className="horas-grid">
            {horasDisponibles.map((hora) => (
              <button
                key={hora}
                className={`hora-btn ${horaSeleccionada === hora ? 'activa' : ''}`}
                onClick={() => setHoraSeleccionada(hora)}
              >
                {hora}
              </button>
            ))}
          </div>
          {horaSeleccionada && (
            <p className="resumen-seleccion">
              Fecha y hora seleccionadas: {fecha.toLocaleDateString('es-ES')} a las {horaSeleccionada}
            </p>
          )}
        </div>
      )}
      
      {/* Mostrar formulario de operario cuando se seleccione fecha y hora */}
      {horaSeleccionada && (
        <div className="operario-container">
          <h4>Datos del Conductor (Opcional)</h4>
          <FormOperario 
            onGuardar={(docConductor, matricula) => {
              console.log('Operario guardado:', { docConductor, matricula, fecha: fecha.toLocaleDateString('es-ES'), hora: horaSeleccionada });
            }}
            onCancelar={() => {}}
            opcional={true}
          />
        </div>
      )}
      
      {horaSeleccionada && <button type="submit" className="submit-button">Enviar Solicitud</button>}
    </div>
  );
};

export default FormDate;
