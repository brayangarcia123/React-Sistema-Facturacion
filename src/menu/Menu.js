import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <>
    <NavContainer>
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-0">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              clientes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Vendedores
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Carritos de compras
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pedidos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Promociones
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Reclamos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Estadisticas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Notificaciones
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Alertas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Usuarios
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Cerrar sesión
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </NavContainer>
    </>
  );
};

export default Sidebar;

const NavContainer = styled.nav`
    p{
        color:white;
    }  
    ul{
        background-color:#2A4365;
    }
    a{
        color:white;
    }
`