import React from 'react'
import { pedidosMock } from '../Data/Pedidos'
import '../Styles/FormPedidoStyle.css'

const FormPedido = () => {
  return (
    <div>
        <label>Selecciona tu pedido:</label>
        <table>
          <thead>
            <tr>
              <th className='Title'>Pedido</th>
              <th className='Title'>Cantidad</th>
              <th className='Title'>Producto</th>
              <th className='Title'>Elegir</th>
            </tr>
            {pedidosMock.map((pedido) => (
              <tr key={pedido.id}>
                <td className='content'>{pedido.id}</td>
                <td className='content'>{pedido.cantidad}</td>
                <td className='content'>{pedido.producto}</td>
                <td className='content'><input type="checkbox" name="elegir" id={pedido.id} /></td>
              </tr>
            ))}<tr/>
          </thead>
        </table>
    </div>
  )
}

export default FormPedido