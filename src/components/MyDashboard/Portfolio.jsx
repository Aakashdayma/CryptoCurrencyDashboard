import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

function Portfolio() {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  };
  const data = {
    labels: [
      "Bitcoin",
      "Ethereum",
      "Tether",
    ],
    datasets: [
      {
        label: "Total",
        data: [527,200,83],
        backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 3,
      },
    ],
  };
  return (
    <div className="bg-white h-full rounded-md shadow-lg col-span-2 p-5">
      <div className="flex justify-between">
        <div className="font-bold text-xl">Portfolio</div>
        <div className="font-bold text-lg text-blue-400">
          Total value:{" "}
          <span className="font-bold text-xl text-black">$800</span>
        </div>
      </div>
      <div className="grid place-content-center my-5 max-h-[25vh] xl:max-w-[25vw] ">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default Portfolio;