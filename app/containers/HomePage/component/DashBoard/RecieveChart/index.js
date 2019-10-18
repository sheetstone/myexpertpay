import React from 'react';
import Chart from 'react-google-charts';
import paymentData from 'resources/data/paymentData';

import style from './styles/style.scss';

// with google-charts;
const options = {
  title: ' ',
  colors: ['#b2a0bb', '#ddc2ba', '#72bfb3', '#3C8F80', '#E6B68A', '#E68AA0'],
  pieHole: 0.4,
  is3D: false,
};

class RecieveChart extends React.Component {
  getChartData() {
    let status;
    switch (this.props.dashboardtype) {
      case 'recieved':
        status = 0;
        break;
      case 'sent':
        status = 1;
        break;
      default:
        status = 0;
    }
    switch (this.props.charttype) {
      case 1: // Recipent selected
        return this.getChartDataByKey('name', status);
      case 2: // Bank selected
        return this.getChartDataByKey('bank', status);
      case 3: // Case selected
        return this.getChartDataByKey('casenumber', status);
      case 4: // Categoray selected
        return this.getChartDataByKey('catgory', status);
      default:
        break;
    }
  }

  getChartDataByKey(key, sta) {
    const keylist = [];
    const fineddata = [[key, 'Amount']];

    paymentData.forEach(item => {
      if (!keylist.includes(item[key])) {
        keylist.push(item[key]);
      }
    });
    const group = keylist.map(item => {
      let sum = 0;
      paymentData.forEach(piece => {
        if (piece[key] === item && piece.status === sta) {
          sum += piece.amount;
        }
      });
      return [item, sum];
    });
    return fineddata.concat(group);
  }

  render() {
    return (
      <div>
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={this.getChartData()}
          options={options}
          className={style.piechart}
        />
      </div>
    );
  }
}

export default RecieveChart;
