import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const options = {
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
        },
      title: {
        display: false,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sept', 'Oct','Nov', 'Dec'],
    datasets: [
        {
            label: 'Phones',
            backgroundColor: 'rgb(75, 192, 192, 0.7)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 0,
            data: [65, 59, 80, 81, 56, 77, 59, 65, 88, 75, 69, 73]
        },
        {
            label: 'Laptops',
            backgroundColor: 'rgb(20, 100, 192, 0.7)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 0,
            data: [65, 59, 80, 81, 56, 77, 59, 65, 88, 75, 69, 73]
        },
        {
            label: 'Headphones',
            backgroundColor: 'rgb(53, 162, 235, 0.7)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 0,
            data: [65, 59, 80, 81, 56, 77, 59, 65, 88, 75, 69, 73]
        },
        {
          label: 'Mice',
          backgroundColor: 'rgb(75, 255, 192, 0.7)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 0,
          data: [65, 59, 80, 81, 56, 77, 59, 65, 88, 75, 69, 73]
        },
        {
          label: 'Desktop PCs',
          backgroundColor: 'rgb(75, 192, 10, 0.7)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 0,
          data: [65, 59, 80, 81, 56, 77, 59, 65, 88, 75, 69, 73]
        }
    ]
};

export default function Chart3(){
  return <Bar options={options} data={data} />;
}