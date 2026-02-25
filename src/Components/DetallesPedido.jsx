import React from 'react'
import '../Styles/Detalles.css'

const DetallesPedido = ({ pedido, onCerrar }) => {
  if (!pedido) {
    return <p>No hay pedido seleccionado</p>;
  }

  return (
    <div className="detalles-pedido">
        <h2>Detalles del Pedido #{pedido.id}</h2>
        <p><strong>Cliente:</strong> {pedido.cliente}</p>
        <p><strong>Dirección:</strong> {pedido.direccion}</p>
        <p><strong>Ciudad:</strong> {pedido.ciudad}</p>
        
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {pedido.productos && pedido.productos.map((item, index) => (
                    <tr key={index}>
                        <td>{item.producto}</td>
                        <td>{item.cantidad}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button onClick={onCerrar}>Cerrar</button>
    </div>
  )
}

export default DetallesPedido