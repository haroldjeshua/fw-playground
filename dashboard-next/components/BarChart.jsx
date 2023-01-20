import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
      datasets: [
        {
          label: "Revenue $",
          data: [1212, 3442, 4654, 4234, 6124, 5444, 1235],
          borderColor: "hsl(211, 76%, 45%)",
          backgroundColor: "hsla(211, 76%, 45%, 50%)",
        },
      ],
    });
  }, []);

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
