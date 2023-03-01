/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components'

function Header() {
  return (
    <>
        <NavContainer>
        <nav class="navbar navbar-dark justify-content-between">
            <a class="navbar-brand">SOLAR REPRESENTACIONES</a>
            
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">admin@gmail.com</button>
          
        </nav>
        </NavContainer>
    </>
  );
}

export default Header;

const NavContainer = styled.nav`
    button{
        margin-right: 1rem;
    }
    a{
        margin-left: 1rem;  
    }
    background-color:#2C5282;
`