import {
    ChartOptions
} from 'chart.js';
import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';

interface BalanceHistoryChartProps {
  labels: string[];
  data: number[];
}

const BalanceHistoryChart: React.FC<BalanceHistoryChartProps> = ({ labels, data }) => {
  const chartRef = useRef<any>(null);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Balance',
        data,
        fill: true,
        tension: 0.4,
        borderColor: '#2563EB', // Tailwind blue-600
        backgroundColor: (context: any) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
          
            if (!chartArea) return;
          
            const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
            gradient.addColorStop(0, 'rgba(37, 99, 235, 0.3)');
            gradient.addColorStop(1, 'rgba(37, 99, 235, 0)');
          
            return gradient;          
        },
        pointRadius: 0,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#9CA3AF' }, // gray-400
      },
      y: {
        beginAtZero: true,
        ticks: { 
          color: '#9CA3AF',
          stepSize: 200
        },
        grid: { color: '#E5E7EB' }, // gray-200
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { mode: 'index', intersect: false },      
      datalabels: {
        display: false, // 🔥 disables number display on bars
      },  
    },
  };

  return (
    <div className="flex-grow bg-white dark:bg-gray-900 p-4 rounded-xl">
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default BalanceHistoryChart;
