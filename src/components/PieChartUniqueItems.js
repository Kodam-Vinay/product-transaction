import { useSelector } from "react-redux";
import useUniqueItems from "../hooks/useUniqueItems";
import ReactApexChart from "react-apexcharts";
import { useEffect, useState } from "react";

const PieChartUniqueItems = () => {
  useUniqueItems();
  const [series, setSeries] = useState([]);
  const [labelsValues, setLableValues] = useState([]);
  const selectedMonth = useSelector(
    (store) => store?.stats?.selectedMonth?.name
  );
  const storedResults = useSelector(
    (store) => store?.uniquElements?.uniqueItemsList
  );
  useEffect(() => {
    const values = storedResults?.map((each) => each?.value);
    setSeries(values);
    const keys = storedResults?.map((each) => each?.category);
    setLableValues(keys);
  }, [storedResults]);
  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: labelsValues,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="px-16 mx-auto my-10">
      <h1 className="text-3xl font-bold">Pie Chart Stats - {selectedMonth}</h1>
      <div id="chart" className="my-10 flex flex-col items-center">
        <ReactApexChart
          options={options}
          series={series}
          type="pie"
          width={380}
        />
      </div>
    </div>
  );
};

export default PieChartUniqueItems;
