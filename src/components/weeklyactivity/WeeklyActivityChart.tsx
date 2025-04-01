import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ChartDataLabels, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface WeeklyActivityChartProps {
  labels: string[];
  deposits: number[];
  withdrawals: number[];
}

const WeeklyActivityChart: React.FC<WeeklyActivityChartProps> = ({
  labels,
  deposits,
  withdrawals,
}) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Deposit',
        data: deposits,
        backgroundColor: '#3B82F6', // Tailwind blue-500
        borderRadius: 6,
        borderSkipped: false,
        barPercentage: 0.4,
      },
      {
        label: 'Withdraw',
        data: withdrawals,
        backgroundColor: '#000000',
        borderRadius: 6,
        borderSkipped: false,
        barPercentage: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      datalabels: {
        display: false,
      },  
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        ticks: {
          beginAtZero: true,
          stepSize: 100, 
        },
        grid: { 
          color: '#E5E7EB' 
        }, 
      },
    },
  };

  return (
    <div className="flex-grow bg-white dark:bg-gray-900 p-4 rounded-xl">
      <Bar data={data} options={options} />
    </div>
  );
};

export default WeeklyActivityChart;
