import React from 'react'
import '../Styles/MenuStyle.css'

const Menu = ({ onNavigate, onClose }) => {
  const handleNavigate = (e, view) => {
    e.preventDefault();
    onNavigate && onNavigate(view);
    onClose && onClose();
  }

  return (
    <div>
      <div className='menu-container'>
        <ul>
          <li>
            <a href="#" onClick={(e) => handleNavigate(e, 'agendar')}>Agendar Cita</a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleNavigate(e, 'verCitas')}>Ver Citas</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu