import React from 'react';
import Chart from 'react-google-charts';

import style from './styles/style.scss';

// with google-charts;
const recievedmoney = [
  ['Name', 'Percentage'],
  ['David Doe', 134.22],
  ['Steve Sailor', 400.33],
  ['John Joe', 300.22],
];

const options = {
  title: " ",
  colors: ['#b2a0bb', '#ddc2ba', '#72bfb3', '#3C8F80', '#E6B68A', '#E68AA0'],
  pieHole: 0.4,
  is3D: false,
};

function RecieveChart() {
  return (
    <div>
      <span>Recieved chart by:</span>
      <span>Recipients</span>
      <div className="chart">
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={recievedmoney}
          options={options}
        />
      </div>
    </div>
  );
}

export default RecieveChart;
