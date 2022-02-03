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
import { Pie } from 'react-chartjs-2';

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
    labels: ['Mobile Phones', 'Computers', 'Gaming',
             'Computer Accesories', 'Gaming Accesories',
             'Mobile Phones Accesories', 'Home Audio'],
    datasets: [
        {
            label: '# of Votes',
            data: [20, 37, 10, 15, 6, 7, 5],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(100, 206, 200, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(100, 206, 200, 1)',
            ],
            borderWidth: 1,
          },
    ]
};

export default function Chart2(){
  return <Pie options={options} data={data} />;
}