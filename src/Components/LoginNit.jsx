// LoginNit.jsx
import { useState } from "react";

function LoginNit({ onCodigoEnviado }) {
  const [nit, setNit] = useState("");
  const [loading, setLoading] = useState(false);

  const enviarCodigo = async () => {
    setLoading(true);

    // Simulación temporal (luego será fetch real)
    setTimeout(() => {
      setLoading(false);
      onCodigoEnviado(nit);
    }, 1000);
  };

  return (
    <div>
      <h2>Ingreso con NIT</h2>

      <input
        type="text"
        placeholder="Ingresa tu NIT"
        value={nit}
        onChange={(e) => setNit(e.target.value)}
      />

      <button onClick={enviarCodigo} disabled={!nit || loading}>
        {loading ? "Enviando..." : "Enviar código"}
      </button>
    </div>
  );
}

export default LoginNit;
