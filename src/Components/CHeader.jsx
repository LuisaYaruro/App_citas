import React, { useState } from 'react'
import '../Styles/HeaderStyle.css'
import { VscMenu } from "react-icons/vsc";
import Menu from './Menu';

const CHeader = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  return (
    <header className='header'>
      <h2>Nombre app</h2>

      <div className='menu-wrapper'>
        <button
          className='buttoMenu'
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <VscMenu className='Menu' />
        </button>

        {menuOpen && (
          <Menu
            onNavigate={(view) => {
              onNavigate && onNavigate(view);
            }}
            onClose={() => setMenuOpen(false)}
          />
        )}
      </div>
    </header>
  )
}

export default CHeader