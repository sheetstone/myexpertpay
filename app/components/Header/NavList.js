import React from 'react';
import { Nav } from 'react-bootstrap';

function NavList() {
  return (
    <Nav activeKey="/home" className="justify-content-between">
      <Nav.Item>
        <Nav.Link href="/bankaccount">Bank Account</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/caseinfo">Case Info</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/recipients">Recipients</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/payment">Payment</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavList;
