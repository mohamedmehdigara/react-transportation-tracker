// DelayChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { Chart, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';

// Register required chart.js components
Chart.register(CategoryScale, LinearScale, BarController, BarElement);

const ChartContainer = styled.div`
  margin-top: 20px;
`;

const DelayChart = ({ stops }) => {
  // Extracting stop names and delays
  const stopNames = stops.map(stop => stop.name);
  const delays = stops.map(stop => stop.delay);

  // Chart data
  const chartData = {
    labels: stopNames,
    datasets: [
      {
        label: 'Delay (min)',
        data: delays,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      x: {
        type: 'category', // Specify the scale type for x-axis
      },
      y: {
        type: 'linear', // Specify the scale type for y-axis
        beginAtZero: true,
      },
    },
  };

  return (
    <ChartContainer>
      <h2>Delay Distribution</h2>
      <Bar data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default DelayChart;
