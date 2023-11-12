import { useSelector } from "react-redux";
import useStats from "../hooks/useStats";

const TransactionStats = () => {
  useStats();
  const selectedMonth = useSelector(
    (store) => store?.stats?.selectedMonth?.name
  );
  const selectedMonthStatistics = useSelector(
    (store) => store?.stats?.statistics
  );
  if (!Object.keys(selectedMonthStatistics)) return;
  return (
    <div className="px-16 mx-auto my-10">
      <h1 className="text-3xl font-bold">Statistics - {selectedMonth}</h1>
      <div className="bg-[#f8df8c] rounded-md w-1/3 p-5 mt-5">
        <p className="flex items-center justify-between">
          <span className="font-bold">Total sale</span>
          <span className="text-xl">{selectedMonthStatistics?.totalSale}</span>
        </p>
        <p className="flex items-center justify-between">
          <span className="font-bold">Total sold item</span>
          <span className="text-xl">
            {selectedMonthStatistics?.noOfSoldItems}
          </span>
        </p>
        <p className="flex items-center justify-between">
          <span className="font-bold">Total not sold item</span>
          <span className="text-xl">
            {selectedMonthStatistics?.noOfNotSoldItems}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TransactionStats;
