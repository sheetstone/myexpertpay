/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import BankAccount from 'containers/BankAccount/Loadable';
import CaseInfo from 'containers/CaseInfo/Loadable';
import PaymentList from 'containers/PaymentList/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - MyExpertPay" defaultTitle="MyExpertPay">
        <meta name="description" content="My ExpertPay" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/bankaccount" component={BankAccount} />
        <Route path="/caseinfo" component={CaseInfo} />
        <Route path="/payment" component={PaymentList} />
      </Switch>
      <Footer />
    </div>
  );
}
