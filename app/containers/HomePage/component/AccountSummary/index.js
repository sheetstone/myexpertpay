import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DashBoard from '../DashBoard';

import style from './styles/style.scss';

function AccountSummary() {
  return (
    <Container className={style.accountcontainer}>
      <Row>
        <Col>
          <DashBoard type='recieved' />
        </Col>
        <Col>
          <DashBoard type='sent' />
        </Col>
      </Row>
    </Container>
  );
}

export default AccountSummary;
