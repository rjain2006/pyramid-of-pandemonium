import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PerformanceDashboard = () => {
  const data = {
    labels: ['Bubble Sort', 'Quick Sort', 'Merge Sort'],
    datasets: [
      {
        label: '# of Swaps',
        data: [50, 20, 25],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '# of Comparisons',
        data: [100, 40, 50],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className="mt-12 w-3/4 mx-auto">
      <h2 className="text-2xl font-bold mb-6">Performance Dashboard</h2>
      <Bar data={data} />
    </div>
  );
};

export default PerformanceDashboard;
