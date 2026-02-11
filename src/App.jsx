import React from 'react'
import CHeader from './CHeader'
import FormDate from './FormDate'
import './Styles/StyleApp.css'
import FormPedido from './FormPedido'

const App = () => {
  return (
    <div className='Container_App'>
        < CHeader />
        
        <div className='app_Content'>
        <h4>¡Bienvenido, usuario!</h4>
        <p>Agenda la recogida de tu pedido aqui</p>
        < FormPedido />
        < FormDate />        
        </div>

    </div>
  )
}

export default App