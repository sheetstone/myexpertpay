/*
 * Bank List
 */
import React from 'react';
import { Row, Col } from 'react-bootstrap';

import BankItem from '../BankItem';
import bankData from 'resources/data/bankData';

import style from './styles/style.scss';

export default function BankList() {
  return (
    <div>
      <Row>
        {bankData.map((item, i) => (
          <Col xl={3} lg={4} md={6} key={`bankitem${i.toString()}`}>
            <BankItem bankitem={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
