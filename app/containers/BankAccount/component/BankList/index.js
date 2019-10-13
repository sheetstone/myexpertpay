/*
 * Bank List
 */
import React from 'react';
import BankItem from '../BankItem';
import { Row, Col } from 'react-bootstrap';

import style from './styles/style.scss';

export default function BankList() {
  return (
    <div>
      ssss
      <Row>
        <Col xl={3} lg={4} md={6}>
          <BankItem />
        </Col>
        <Col xl={3} lg={4} md={6}>
          <BankItem />
        </Col>
        <Col xl={3} lg={4} md={6}>
          <BankItem />
        </Col>
      </Row>
    </div>
  );
}
