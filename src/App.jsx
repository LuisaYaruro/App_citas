import React, { useState } from 'react'
import CHeader from './Components/CHeader'
import FormDate from './Components/FormDate'
import './Styles/StyleApp.css'
import FormPedido from './Components/FormPedido'

const App = () => {

  /* ============================================================
     🔐 ESTADOS DE AUTENTICACIÓN (LOGIN)
     ============================================================ */

  // Controla en qué paso estamos: login | verificar | app
  const [paso, setPaso] = useState("login");

  // Guarda el NIT ingresado temporalmente
  const [nitActual, setNitActual] = useState("");


  return (
    <div className='Container_App'>

      <CHeader />


      <div className='app_Content'>

        {/* ============================================================
            SECCIÓN LOGIN (SIMULACIÓN)
           ============================================================ */}

        {paso === "login" && (
          <div>
            <h2>Ingreso con NIT</h2>

            <input
              type="text"
              placeholder="Ingresa tu NIT"
              onChange={(e) => setNitActual(e.target.value)}
            />

            {/* 
              🔵 SIMULACIÓN:
              Aquí después irá el fetch real a la API.
              Por ahora solo cambia el paso.
            */}
            <button onClick={() => setPaso("verificar")}>
              Simular envío de código
            </button>
          </div>
        )}


        {/* ============================================================
            🔐 SECCIÓN VERIFICACIÓN (SIMULACIÓN)
           ============================================================ */}

        {paso === "verificar" && (
          <div>
            <h2>Verificación de Código</h2>
            <p>
              Se envió un código al correo asociado al NIT: <b>{nitActual}</b>
            </p>

            <input
              type="text"
              placeholder="Ingresa el código"
            />

            {/* 
              🔵 SIMULACIÓN:
              En el futuro aquí se validará contra la API.
              Por ahora entra directamente a la app.
            */}
            <button onClick={() => setPaso("app")}>
              Simular verificación correcta
            </button>
          </div>
        )}


        {/* ============================================================
            🏠 CONTENIDO REAL DE TU APLICACIÓN
           ============================================================ */}

        {paso === "app" && (
          <>
            <h4>¡Bienvenido, usuario!</h4>
            <p>Agenda la recogida de tu pedido aqui</p>
            <FormPedido />
            <FormDate />
          </>
        )}

      </div>
    </div>
  )
}

export default App
