import {
    ChartOptions
} from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';

interface ExpenseChartProps {
  labels: string[];
  data: number[];
}

const ExpenseChart: React.FC<ExpenseChartProps> = ({ labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Expense Distribution',
        data,
        backgroundColor: ['#1E3A8A', '#F97316', '#3B82F6', '#000000'],
        borderColor: '#ffffff',
        borderWidth: 2,
        offset: [10]
      },
    ],
  };

  const options: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: '#ffffff',
        formatter: (value: number, ctx: any) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return `${value}%\n${label}`;
        },
        font: {
          weight: 'bold',
          size: 12,
        },
      },
    },
  };

  return (
    <div className="flex-grow bg-white dark:bg-gray-900 p-4 rounded-xl">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default ExpenseChart;
