import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DashBoard from '../DashBoard';

import style from './styles/style.scss';



function AccountSummary() {
  return (
    <section>
      <Container>
        <Row>
          <Col><DashBoard /></Col>
          <Col><DashBoard /></Col>
        </Row>
      </Container>
    </section>
  );
}

export default AccountSummary;
