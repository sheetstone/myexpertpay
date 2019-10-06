import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logoimage from '../../resources/images/u4.png';

function NavLogo() {
  return (
    <Navbar.Brand>
      <Link to="/">
        <img src={Logoimage} alt="My Expertpay logo" />
      </Link>
    </Navbar.Brand>
  );
}

export default NavLogo;
