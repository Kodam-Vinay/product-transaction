import { useSelector } from "react-redux";
import usePriceStats from "../hooks/usePriceStats";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChartStats = () => {
  usePriceStats();
  const [seriesValues, setSeriesValues] = useState([]);
  const [labelsValues, setLableValues] = useState([]);
  const selectedMonth = useSelector(
    (store) => store?.stats?.selectedMonth?.name
  );
  const priceRangeData = useSelector(
    (store) => store?.priceRangeStats?.priceRangeData
  );
  useEffect(() => {
    const values = priceRangeData?.map((each) => each?.value);
    setSeriesValues(values);
    const labels = priceRangeData?.map((each) => each?.name);
    setLableValues(labels);
  }, [priceRangeData]);
  const series = [
    {
      data: seriesValues,
    },
  ];
  const options = {
    annotations: {
      points: [
        {
          x: "Bananas",
          seriesIndex: 0,
          label: {
            borderColor: "#775DD0",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#775DD0",
            },
            text: "Bananas are good",
          },
        },
      ],
    },
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },

    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"],
      },
    },
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: labelsValues,
      tickPlacement: "on",
    },
    yaxis: {},
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
  };

  return (
    <div className="px-16 mx-auto my-10">
      <h1 className="text-3xl font-bold">Bar Chart Stats - {selectedMonth}</h1>
      {priceRangeData ? (
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={350}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BarChartStats;
