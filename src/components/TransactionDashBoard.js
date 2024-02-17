import { useEffect, useState } from "react";
import TransactionTable from "./TransactionTable";
import useSearchResults from "../hooks/useSearchResults";
import { useDispatch } from "react-redux";
import { storeSelectedMonth } from "../utils/storeStatsResultsSlice";
import TransactionStats from "./TransactionStats";
import BarChartStatistics from "./BarChartStatistics";

const monthsList = [
  {
    id: 1,
    month: "January",
  },
  {
    id: 2,
    month: "February",
  },
  {
    id: 3,
    month: "March",
  },
  {
    id: 4,
    month: "April",
  },
  {
    id: 5,
    month: "May",
  },
  {
    id: 6,
    month: "June",
  },
  {
    id: 7,
    month: "July",
  },
  {
    id: 8,
    month: "August",
  },
  {
    id: 9,
    month: "September",
  },
  {
    id: 10,
    month: "October",
  },
  {
    id: 11,
    month: "November",
  },
  {
    id: 12,
    month: "December",
  },
];
const TransactionDashBoard = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(monthsList[2].month);
  const [pageNo, setPageNo] = useState(1);

  const onHandleMonth = (event) => {
    setSelectedMonth(event.target.value);
  };
  const onHandleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  useSearchResults(searchInput, pageNo);
  useEffect(() => {
    const findSelectedMonthNum = monthsList.find(
      (each) => each?.month === selectedMonth
    );
    if (!findSelectedMonthNum) return;
    dispatch(
      storeSelectedMonth({
        monthNum: findSelectedMonthNum?.id,
        month: findSelectedMonthNum?.month,
      })
    );
  }, [selectedMonth]);
  return (
    <div className="w-full h-full">
      <div className="rounded-full bg-white mx-auto flex flex-col justify-center w-40 h-40 items-center">
        <span className="text-gray-500 font-bold">Transaction </span>
        <span className="text-gray-500 font-bold"> Dashboard</span>
      </div>
      <div className="flex items-center w-full justify-between px-10 mt-10">
        <input
          type="search"
          placeholder="Search Transaction"
          className="px-4 py-2 rounded-lg w-1/4 outline-none bg-[#f8df8c] text-black font-bold"
          onChange={onHandleSearchInput}
          value={searchInput}
        />
        <select
          className="px-4 py-2 rounded-lg w-1/4 outline-none bg-[#ebb840]"
          onChange={onHandleMonth}
          value={selectedMonth}
        >
          {monthsList.map((each) => (
            <option key={each?.id} value={each?.month}>
              {each?.month}
            </option>
          ))}
        </select>
      </div>
      <TransactionTable />
      <div className="px-10 mx-auto w-full flex items-center justify-evenly">
        <p className="text-lg font-bold">page No: {pageNo}</p>
        <div className="flex items-center">
          <button
            className="font-bold text-lg"
            onClick={() => pageNo > 1 && setPageNo(pageNo - 1)}
          >
            Prev
          </button>
          <hr className="w-2 border-black mt-1 mx-2" />
          <button
            className="font-bold text-lg"
            onClick={() => setPageNo(pageNo + 1)}
          >
            Next
          </button>
        </div>
        <p className="text-lg font-bold">Per Page: 10</p>
      </div>
      <TransactionStats />
      <div>
        <div className="w-full mx-auto flex flex-col items-center mt-5 pb-10">
          <h2 className="font-bold mb-5 text-[36px] -ml-44">
            Bar Chart Stats - {selectedMonth}
          </h2>
          <BarChartStatistics />
        </div>
      </div>
    </div>
  );
};

export default TransactionDashBoard;
