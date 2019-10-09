import React from 'react';
import RecieveChart from './RecieveChart/index';

import style from './styles/style.scss';

const recContext = {
  heading: 'Money Recieved',
  pendingheader: 'Pending Receivable',
}
const sentContext = {
  heading: 'Money Sent',
  pendingheader: 'Pending Payment',
}

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {date: new Date()};
  }

  getHeaContext() {
    if (this.props.type == "recieved") {
      return recContext.heading;
    } else if (this.props.type == "sent") {
      return sentContext.heading
    }
  }
  getPenHeaContext() {
    if (this.props.type == "recieved") {
      return recContext.pendingheader;
    } else if (this.props.type == "sent") {
      return sentContext.pendingheader
    }
  }
  render() {
    return (
      <div>
        <div className={style.dashboardheading}>
          <h2>{this.getHeaContext()}</h2>
          <span className={style.currentmonth}>Oct-2019</span>
        </div>
        <div className={style.dashboardMoney}>
          <span className={style.dollarsign}>$</span>
          <span className={style.generalMoney}>300.33</span>
        </div>
        <div className={style.pending}>
          <span className={style.pendingheader}>{this.getPenHeaContext()}</span>
          <span className={style.pendingMoney}>234.23</span>
        </div>
        <RecieveChart type={this.props.type} />
      </div>
    );
  }
}

export default DashBoard;
