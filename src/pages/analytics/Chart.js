import React from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Sales',
        data: [100, 200, 150], // Replace with actual sales data for each product
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'] // Replace with desired colors for each product
      }
    ]
  };


const Chart = () => {
  return (
    <>
    <h1>Top 3 products selling</h1>
    <Doughnut data={data} />
    
    </>
  )
}

export default Chart