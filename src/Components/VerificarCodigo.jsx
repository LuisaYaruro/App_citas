// VerificarCodigo.jsx
import { useState } from "react";
import '../Styles/Login.css';

function VerificarCodigo({ nit, onLoginExitoso }) {
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState("");

  // Formatea entrada como "XXX - XXX" y almacena el valor formateado
  const handleChange = (e) => {
    // Mantener solo dígitos y limitar a 6
    const raw = e.target.value.replace(/\D/g, '').slice(0, 6);
    let formatted = raw;
    if (raw.length > 3) formatted = raw.slice(0, 3) + ' - ' + raw.slice(3);
    setCodigo(formatted);
    setError("");
  };

  const verificar = () => {
    const raw = codigo.replace(/\D/g, '');
    if (raw === "123456") {
      onLoginExitoso();
    } else {
      setError("Código incorrecto");
    }
  };

  return (
    <div className="loginNit-container">
      <h2>Verificación</h2>
      <p>Se envió un código al correo registrado del NIT {nit}</p>

      <input
        className="nitInput codeInput"
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder="XXX - XXX"
        value={codigo}
        onChange={handleChange}
      />

      <button className="button" onClick={verificar}>Verificar</button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default VerificarCodigo;
