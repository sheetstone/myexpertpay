import React from 'react';
import { Link } from 'react-router-dom';

import style from './styles/style.scss';

const user = {
  username: 'John Joe',
};

const bank = {
  number: 2,
  status: true,
};

function Welcome() {
  return (
    <section>
      <h2>Welcome, {user.username}</h2>
      <span>Status:{bank.status?'Verified':'Pending'}</span>
      <span>|</span>
      <span>Bank accounts number:<Link to='/bankaccount'>{bank.number}</Link></span>
    </section>
  );
}

export default Welcome;
