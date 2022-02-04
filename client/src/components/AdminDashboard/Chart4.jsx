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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const options = {
  responsive: true,
  plugins: {
    legend: {
        display: true,
        position: 'bottom',
    },
    title: {
        display: false,
        text: 'Chart.js Bar Chart',
    },
  },
};

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sept', 'Oct','Nov', 'Dec'],
    datasets: [
        {
            label: 'Sales',
            backgroundColor: 'rgba(254, 158, 250, 0.7)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 77, 59, 65, 88, 75, 69, 73]
        }
    ]
};

export default function Chart4(){
  return <Line options={options} data={data} />;
}