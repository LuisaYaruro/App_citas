
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Styles/FormDateStyle.css'

const FormDate = () => {
  const [fecha, setFecha] = useState(null);

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
    </div>
  );
};

export default FormDate;
