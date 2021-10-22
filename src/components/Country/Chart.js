import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const LineChart = ({ chartData, type }) => {
  const options = {
    plugins: {
      legend: {
        labels: {
          color: '#fff',
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: '#fff',
          font: {
            size: 14,
          },
          stepSize: 1,
          beginAtZero: true,
        },
      },
      x: {
        ticks: {
          color: '#fff',
          font: {
            size: 14,
          },
          stepSize: 1,
          beginAtZero: true,
        },
      },
    },
  };
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: ` ${type}`,
        data: chartData,
        fill: false,
        backgroundColor: 'transparent',
        borderColor: '#e9bf27',
        borderWidth: '1',
        pointRadius: '3',
      },
    ],
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

LineChart.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.number).isRequired,
  type: PropTypes.string.isRequired,
};

export default LineChart;
