/*
 * Bank Item
 */
import React from 'react';

import style from './styles/style.scss';
import SideDropDownMenu from '../SideDropDownMenu';

function formatBankNumber(number = "0") {
  const reg = /\d{4}$/gm;
  const found = number.toString().match(reg);
  if (found !== null){
    return "XXXX-XXXX-XXXX-"+found[0]
  }else{
    return "Error!"
  }
}

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

export default function BankItem(props) {
  return (
    <div className={style.bankCard}>
      <div className={style.bankName}>{props.bankitem.name}</div>
      <SideDropDownMenu />
      <div className={style.bankType}>{props.bankitem.type}</div>
      <div className={style.bankNum}>{ formatBankNumber(props.bankitem.accountnum) }</div>
      <div>{(props.bankitem.verified) ? labelActive() : labelVerification()}</div>
    </div>
  );
}
