// VerificarCodigo.jsx
import { useState } from "react";

function VerificarCodigo({ nit, onLoginExitoso }) {
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState("");

  const verificar = () => {
    // Simulación
    if (codigo === "123456") {
      onLoginExitoso();
    } else {
      setError("Código incorrecto");
    }
  };

  return (
    <div>
      <h2>Verificación</h2>
      <p>Se envió un código al correo registrado del NIT {nit}</p>

      <input
        type="text"
        placeholder="Ingresa el código"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />

      <button onClick={verificar}>Verificar</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default VerificarCodigo;
