import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/componente1">Componente 1</Link></li>
        <li><Link to="/componente2">Componente 2</Link></li>
        <li><Link to="/componente3">Componente 3</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
