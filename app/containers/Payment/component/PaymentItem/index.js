/*
 * Bank Item
 */
import React from 'react';

import style from './styles/style.scss';

function labelActive() {
  return (
    <span className={style.labelActive}>
      Active
    </span>
  );
}

function labelVerification() {
  return (
    <span className={style.labelVerification}>
      Require Verification
    </span>
  );
}

export default function PaymentItem(props) {
  const { paymentData } = props
  return (
    <li className={style.paymentlist}>
      <div className={style.paymentname}>{paymentData.name}</div>
      <div className={style.paymentstatus}>{paymentData.status}</div>
      <div className={style.paymentbank}>{paymentData.bank}</div>
      <div className={style.paymentcase}>{paymentData.casenumber}</div>
      <div className={style.paymentcatgory}>{paymentData.catgory}</div>
      <div className={style.paymentamount}>{paymentData.amount}</div>
    </li>
  );
}
