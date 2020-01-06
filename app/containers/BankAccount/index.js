/*
 * Bank Account
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import BankList from './component/BankList';
import EditModal from './component/EditModal';

import style from './styles/style.scss';
import messages from './messages';

export default function BankAccount() {
  return (
    <article className={style.bankaccountbg}>
      <Helmet>
        <title>Bank Account</title>
        <meta name="description" content="My Expertpay" />
      </Helmet>
      <Container>
        <h1 className={style.pageheader}>
          <FormattedMessage {...messages.header} />
        </h1>
        <hr />
        <p className={style.pageScaffoldingHeader}>
          <FormattedMessage {...messages.scaffoldingHeader} />
        </p>
        <Button variant="primary" size="md">
          <FontAwesomeIcon icon={faPlus} color="#ffffff" />
          &nbsp;New Bank Account
        </Button>
        <hr />
        <BankList />
        <EditModal />
      </Container>
    </article>
  );
}
