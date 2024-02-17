import { useSelector } from "react-redux";
import usePriceStats from "../hooks/usePriceStats";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const BarChartStatistics = () => {
  usePriceStats();
  const priceRangeData = useSelector(
    (store) => store?.priceRangeStats?.priceRangeData
  );
  return (
    <BarChart width={730} height={250} data={priceRangeData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" angle={-30} tickMargin={20} height={50} />
      <YAxis />
      <Bar dataKey="value" fill="#6ce5e8" maxBarSize={35} />
    </BarChart>
  );
};

export default BarChartStatistics;
