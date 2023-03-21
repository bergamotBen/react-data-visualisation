import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const Graph = () => {
  const [energyMix, setEnergyMix] = useState([]);
  useEffect(() => {
    fetch("https://api.carbonintensity.org.uk/generation")
      .then((res) => res.json())
      .then(({ data }) => {
        setEnergyMix(data.generationmix);
      });
  }, []);
  ChartJS.register(ArcElement, Tooltip, Legend);
  const options = {
    options: {
      plugins: {
        legend: {
          display: false,
          labels: {
            color: "rgba(64, 61, 57, 1)",
          },
        },
        tooltip: {
          enabled: true,
          usePointStyle: false,
          backgroundColor: "rgba(0, 0, 0, 0)",
          displayColors: false,
          titleFont: { size: 28 },
          color: "rgba(64, 61, 57, 1)",
          bodyColor: "rgba(0, 0, 0, 0)",
        },
      },
      onClick: (e) => {
        // console.log(e.chart.tooltip.title);
        // const canvasPosition = Chart.helpers.getRelativePosition(e, chart);
        // // Substitute the appropriate scale IDs
        // const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
        // const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
      },
    },
  };

  const data = {
    labels: energyMix.map((source) => {
      return `${source.perc}% ${source.fuel}`;
    }),
    datasets: [
      {
        data: energyMix.map((source) => {
          return source.perc;
        }),
        backgroundColor: [
          "rgba(235, 94, 40, 0.75)",
          //   "rgba(75, 192, 192, 0.)",
          //   "rgba(153, 102, 255, 0.2)",
          //   "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: "rgba(207, 219, 213, 0)",
        borderWidth: 4,
        hoverOffset: 40,
        transitions: { show: false },
      },
    ],
  };

  return (
    <section id="graphSection">
      <h4 className="boxTitle">Great Britain's current energy mix.</h4>
      <Doughnut id="doughnut" data={data} options={options.options} />
    </section>
  );
};

export default Graph;
