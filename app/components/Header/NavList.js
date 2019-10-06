import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function NavList() {
  return (
    <Nav activeKey="/home" className="justify-content-between">
      <Nav.Item>
        <Link to="/bankaccount" className="nav-link">Bank Account</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/caseinfo" className="nav-link">Case Info</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/recipients" className="nav-link">Recipients</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/payment" className="nav-link">Payment</Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavList;
