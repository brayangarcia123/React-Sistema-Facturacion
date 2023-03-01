import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
<>
    <NavContainer>
        <footer className="bg-2C5282 py-3">
        <div className="container text-center">
            <p>&copy; Solar Representaciones S.A.C. - Todos los derechos reservados.</p>
        </div>
        </footer>
    </NavContainer>
    </>
  );
};

export default Footer;

const NavContainer = styled.nav`
    p{
        color:white;
    }  
    background-color:#2C5282;
`