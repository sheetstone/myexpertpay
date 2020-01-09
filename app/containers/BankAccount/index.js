/*
 * Bank Account
 */
import React, { useState } from 'react';
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <Button variant="primary" size="md" onClick={handleShow}>
          <FontAwesomeIcon icon={faPlus} color="#ffffff" />
          &nbsp;New Bank Account
        </Button>
        <hr />
        <BankList />
        <EditModal show={show} onHide={handleClose} />
      </Container>
    </article>
  );
}
