import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import AccountSummary from '../AccountSummary';

import style from './styles/style.scss';

function TabList() {
  return (
    <Tabs defaultActiveKey="accountsummary" id="uncontrolled-tab-example">
      <Tab eventKey="accountsummary" title="Account Summary">
        <AccountSummary />
      </Tab>
      <Tab eventKey="messages" title="Messages">
        <div>ss2</div>
      </Tab>
      <Tab eventKey="activity" title="Activity">
        <div>ss3</div>
      </Tab>
    </Tabs>
  );
}

export default TabList;
