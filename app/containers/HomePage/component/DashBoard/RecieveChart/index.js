import React from 'react';
import Chart from 'react-google-charts';
import data from 'resources/data/data';

import style from './styles/style.scss';

// with google-charts;
const options = {
  title: " ",
  colors: ['#b2a0bb', '#ddc2ba', '#72bfb3', '#3C8F80', '#E6B68A', '#E68AA0'],
  pieHole: 0.4,
  is3D: false,
};




class RecieveChart extends React.Component {

  getChartData() {
    console.log(this.props.charttype);
    //console.log(this.props.dashboardtype);

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
      case 1: //Recipent selected
        return this.getChartDataByPeople(status);
      case 2: //Bank selected
        return this.getChartDataByBank(status);
      case 3: //Case selected
        return this.getChartDataByPeople(status);
      case 4: //Categoray selected
        return this.getChartDataByPeople(status);
      default:
        break;
    }
  }

  getChartDataByPeople(sta) {
    const fineddata = [['Name', 'Amount']];
    data.forEach(item => {
      if (item.status === sta) {
        fineddata.push([item.name, item.amount]);
      }
    });
    return fineddata;
  };

  getChartDataByBank(sta) {
    const fineddata = [['Bank', 'Amount']];
    data.forEach(item => {
      if (item.status === sta) {
        fineddata.push([item.bank, item.amount]);
      }
    });
    return fineddata;
  };

  render() {
    return (
      <div>
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={this.getChartData()}
          options={options}
        />
      </div>
    );
  }
}

export default RecieveChart;
