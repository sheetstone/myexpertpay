import React from 'react';
import formatMoney from 'utils/formatMoney';
import { getPayments } from 'api/paymentApi';

import RecieveChart from '../DashBoard/RecieveChart';
import ChartTypeDropDown from '../DashBoard/ChartTypeDropDown';

import style from './styles/style.scss';

// Todo: move context to local file.
const context = [[
  'Money Recieved',
  'Pending Receivable',
  'Recieved chart by:',
], [
  'Money Sent',
  'Pending Payment',
  'Sent Chart by:',
]];

const statusDict = [
  'money recieved',
  'money sent',
  'request sent but not recived money',
  'request sent but not paid',
];

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.handleChartDropdown = this.handleChartDropdown.bind(this);
    this.state = {
      paymentData: null,
      chartType: 1,
    };
  }

  componentDidMount() {
    getPayments().then(data => this.setState({paymentData: data}));
  }

  handleChartDropdown(ctype) {
    // console.log('dropdownchanged:' + ctype);

    this.setState({ chartType: parseInt(ctype) });
  }

  updateDashboardType() {
    if (this.props.type === 'recieved') {
      this.setState({ dashboardtype: 0 });
    }
    if (this.props.type === 'sent') {
      this.setState({ dashboardtype: 1 });
    }
  }

  getContext(num) {
    if (this.props.type === 'recieved') {
      return context[0][num];
    }
    if (this.props.type === 'sent') {
      return context[1][num];
    }
  }

  getDoneMoney() {
    let sumRecieved = 0;
    let sumSent = 0;
    if (!!this.state.paymentData === false) return 0;
    this.state.paymentData.forEach(item => {
      if (item.status === 0) {
        sumRecieved += item.amount;
      } else if (item.status === 1) {
        sumSent += item.amount;
      }
    });
    if (this.props.type === 'recieved') {
      return formatMoney(sumRecieved);
    }
    if (this.props.type === 'sent') {
      return formatMoney(sumSent);
    }
  }

  getPendingMoney() {
    let sumRecieved = 0;
    let sumSent = 0;
    if (!!this.state.paymentData === false) return 0;
    this.state.paymentData.forEach(item => {
      if (item.status === 2) {
        sumRecieved += item.amount;
      } else if (item.status === 3) {
        sumSent += item.amount;
      }
    });
    if (this.props.type === 'recieved') {
      return formatMoney(sumRecieved);
    }
    if (this.props.type === 'sent') {
      return formatMoney(sumSent);
    }
  }

  render() {
    return (
      <div>
        <div className={style.dashboardheading}>
          <h2>{this.getContext(0)}</h2>
          <span className={style.currentmonth}>Oct-2019</span>
        </div>
        <div className={style.dashboardMoney}>
          <span className={style.dollarsign}>$</span>
          <span className={style.generalMoney}>{this.getDoneMoney()}</span>
        </div>
        <div className={style.pending}>
          <span className={style.pendingheader}>$&nbsp;{this.getContext(1)}</span>
          <span className={style.pendingMoney}>$&nbsp;{this.getPendingMoney()}</span>
        </div>
        <div className={style.chart}>
          <span className={style.chartheader}>{this.getContext(2)}</span>
          <ChartTypeDropDown onTypeDropDownChange={this.handleChartDropdown} />
          <RecieveChart charttype={this.state.chartType} dashboardtype={this.props.type} paymentData={this.state.paymentData}/>
        </div>
      </div>
    );
  }
}

export default DashBoard;
