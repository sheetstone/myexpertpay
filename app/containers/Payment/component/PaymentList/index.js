/*
 * Bank List
 */
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// import bankData from 'resources/data/bankData';
import PaymentItem from '../PaymentItem';

export default function PaymentList(props) {
  const { paymentData } = props;

  return (
    <div>
      <Row>
        {paymentData.map((item, i) => (
          <PaymentItem paymentData={item} key={`paymentID${i.toString()}`}/>
        ))}
      </Row>
    </div>
  );
}
