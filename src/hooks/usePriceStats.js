import { useDispatch, useSelector } from "react-redux";
import { FETCH_URL } from "../constants/Constants";
import { useEffect } from "react";
import { storePriceStats } from "../utils/storePriceRangeStatsSlice";

const usePriceStats = () => {
  const dispatch = useDispatch();
  const selectedMonth = useSelector(
    (store) => store?.stats?.selectedMonth?.monthNum
  );
  const getData = async () => {
    const response = await fetch(
      FETCH_URL + `price-range-stats?month=${selectedMonth}`
    );
    const data = await response.json();
    dispatch(storePriceStats(data));
  };

  useEffect(() => {
    getData();
  }, [selectedMonth]);
};

export default usePriceStats;
