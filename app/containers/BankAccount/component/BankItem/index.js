/*
 * Bank Item
 */
import React from 'react';

import style from './styles/style.scss';

const bankitem = {
  'name': 'Gwinnett Community Bank',
  'type': 'Checking',
  'accountnum': '4234200200010000',
  'verified': true,
}

function formatBankNumber(number) {
  const reg = /\d{4}$/gm;
  const found = number.match(reg);
  return "XXXX-XXXX-XXXX-"+found[0]
}

export default function BankItem() {
  return (
    <div className={style.bankCard}>
      <div className={style.bankName}>{bankitem.name}</div>
      <div className={style.bankType}>{bankitem.type}</div>
      <div className={style.bankNum}>{ formatBankNumber(bankitem.accountnum) }</div>
      <div>{(bankitem.verified) ? 'verify' : ''}</div>
    </div>
  );
}
