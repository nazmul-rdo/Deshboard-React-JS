import React from 'react';
import Chart from './Chart';
import BarChart from './BarChart';

const AnalyticsDashboard = () => {
  return (
    <>
    <div className="flex flex-row gap-4">
      <div className="w-3/5 border border-gray-300 rounded-lg shadow-md p-4 h-full">
        <BarChart />
      </div>
      <div className="w-2/5 border border-gray-300 rounded-lg shadow-md p-4 ">
        <Chart />
      </div>
    </div>
    </>
  );
};

export default AnalyticsDashboard;