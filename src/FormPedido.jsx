import React from 'react'
import { pedidosMock } from './Data/Pedidos'

const FormPedido = () => {
  return (
    <div>
        <select name="" id="">
            <option value="">Selecciona un producto</option>
            {pedidosMock.map(pedido => (
                <option key={pedido.id} value={pedido.id}>{pedido.cliente}</option>
            ))}
        </select>
    </div>
  )
}

export default FormPedido