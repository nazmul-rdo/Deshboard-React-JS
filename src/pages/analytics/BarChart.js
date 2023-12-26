import React from 'react';
import { Chart as ChartJS, BarElement, Tooltip, Legend, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, Tooltip, Legend, LinearScale);

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: '2023',
        data: [100, 200, 150, 120, 180, 250, 300, 220, 190, 230, 280, 210],
        backgroundColor: [],
      },
      {
        label: '2024',
        data: [35, 75, 26, 83, 76, 87, 45, 120, 0, 0, 0, 0],
        backgroundColor: ["#36a2eb"],
      },
    ],
  };

    for (let i = 1; i < data.datasets[0].data.length; i++) {
        if (data.datasets[0].data[i] > data.datasets[0].data[i - 1]) {
          data.datasets[0].backgroundColor.push('rgba(255, 99, 132, 0.8)');
        } else {
          data.datasets[0].backgroundColor.push('rgba(75, 192, 192, 0.8)');
        }
      }

  return (
    <div>
      <h1>Total Seals 2023-2024</h1>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;