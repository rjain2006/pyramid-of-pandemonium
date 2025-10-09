import React from 'react';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

import { Bar } from 'react-chartjs-2';

const PerformanceChart = () => {
  const data = {
    labels: ['Bubble Sort', 'Merge Sort', 'Quick Sort'], 
    datasets: [
      {
        label: 'Number of Swaps',
        data: [12, 5, 8], 
        backgroundColor: ['#f87171', '#60a5fa', '#34d399'], 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Sorting Performance' },
    },
  };

  return <Bar data={data} options={options} />;
};

export default PerformanceChart;
