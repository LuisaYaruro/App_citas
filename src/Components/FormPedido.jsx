import React, { useState } from 'react'
import { pedidosMock } from '../Data/Pedidos'
import DetallesPedido from './DetallesPedido'
import '../Styles/FormPedidoStyle.css'

const FormPedido = () => {
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const handleCheck = (pedido) => {
    if (pedidoSeleccionado?.id === pedido.id) {
      // If already selected, deselect it
      setPedidoSeleccionado(null);
      setMostrarDetalles(false);
    } else {
      // If not selected, select it
      setPedidoSeleccionado(pedido);
      setMostrarDetalles(true);
    }
  };

  const handleCerrarDetalles = () => {
    setMostrarDetalles(false);
  };

  return (
    <div>
        {!mostrarDetalles ? (
          <>
            <label>Selecciona tu pedido:</label>
            <table>
              <thead>
                <tr>
                  <th className='Title'>Pedido</th>
                  <th className='Title'>Fecha de Solicitud</th>
                  <th className='Title'>Ciudad</th>
                  <th className='Title'>Elegir</th>
                </tr>
                {pedidosMock.map((pedido) => (
                  <tr key={pedido.id}>
                    <td className='content'>{pedido.id}</td>
                    <td className='content'>{pedido.fechaSolicitud}</td>
                    <td className='content'>{pedido.ciudad}</td>
                    <td className='content'>
                      <input 
                        type="checkbox" 
                        name="elegir" 
                        id={pedido.id}
                        checked={pedidoSeleccionado?.id === pedido.id}
                        onChange={() => handleCheck(pedido)}
                      />
                    </td>
                  </tr>
                ))}<tr/>
              </thead>
            </table>
          </>
        ) : (
          <DetallesPedido pedido={pedidoSeleccionado} onCerrar={handleCerrarDetalles} />
        )}
    </div>
  )
}

export default FormPedido