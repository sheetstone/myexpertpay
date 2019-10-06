import React from 'react';
import { Navbar } from 'react-bootstrap';
import Logoimage from '../../resources/images/u4.png';

function NavLogo() {
  return (
    <Navbar.Brand>
      <a href="/">
        <img src={Logoimage} alt="My Expertpay logo" />
      </a>
    </Navbar.Brand>
  );
}

export default NavLogo;
