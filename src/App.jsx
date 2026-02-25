import React, { useState } from 'react'
import CHeader from './Components/CHeader'
import FormDate from './Components/FormDate'
import './Styles/StyleApp.css'
import FormPedido from './Components/FormPedido'
import VerCitas from './Components/VerCitas'
import LoginNit from './Components/LoginNit'
import VerificarCodigo from './Components/VerificarCodigo'

const App = () => {

  /* ============================================================
     🔐 ESTADOS DE AUTENTICACIÓN (LOGIN)
     ============================================================ */

  // Controla en qué paso estamos: login | verificar | app
  const [paso, setPaso] = useState("login");

  // Guarda el NIT ingresado temporalmente
  const [nitActual, setNitActual] = useState("");


  const [appView, setAppView] = useState('agendar')

  return (
    <div className='Container_App'>

      <CHeader onNavigate={setAppView} />


      <div className='app_Content'>

        {/* ============================================================
            SECCIÓN LOGIN (SIMULACIÓN)
           ============================================================ */}

        {paso === "login" && (
          <LoginNit onCodigoEnviado={(nit) => {
            setNitActual(nit);
            setPaso("verificar");
          }} />
        )}


        {/* ============================================================
            🔐 SECCIÓN VERIFICACIÓN (SIMULACIÓN)
           ============================================================ */}

        {paso === "verificar" && (
          <VerificarCodigo nit={nitActual} onLoginExitoso={() => setPaso('app')} />
        )}


        {/* ============================================================
            🏠 CONTENIDO REAL DE TU APLICACIÓN
           ============================================================ */}

        {paso === "app" && (
          <>
            {appView === 'agendar' && (
              <>
                <h4>¡Bienvenido, usuario!</h4>
                <p>Agenda la recogida de tu pedido aqui</p>
                <FormPedido />
                <FormDate />
              </>
            )}

            {appView === 'verCitas' && (
              <VerCitas />
            )}

          </>
        )}

      </div>
    </div>
  )
}

export default App
