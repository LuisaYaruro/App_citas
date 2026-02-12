
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../Styles/FormDateStyle.css'

const FormDate = () => {
  const [fecha, setFecha] = useState(null);
  const [horaSeleccionada, setHoraSeleccionada] = useState(null);

  // Array de horas disponibles (8:00 a 15:30 en formato 24h)
  const horas = [
    "08:00", "09:30", "11:00", "12:30", "14:00", "15:30"
  ];

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
      <DatePicker
        selected={fecha}
        onChange={(date) => setFecha(date)}
        minDate={hoy}
        filterDate={(date) => !diasDeshabilitados(date)}
        excludeDates={[]}
        placeholderText="Seleccione una fecha"
        dateFormat="dd/MM/yyyy"
        className="date-picker-input"
      />

      {/* Mostrar selector de horas solo si se seleccionó una fecha */}
      {fecha && (
        <div className="horas-container">
          <label>Seleccione una hora:</label>
          <div className="horas-grid">
            {horas.map((hora) => (
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
    </div>
  );
};

export default FormDate;
