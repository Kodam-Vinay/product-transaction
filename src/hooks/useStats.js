import { useDispatch, useSelector } from "react-redux";
import { FETCH_URL } from "../constants/Constants";
import { storeStats } from "../utils/storeStatsResultsSlice";
import { useEffect } from "react";

const useStats = () => {
  const dispatch = useDispatch();
  const selectedMonth = useSelector(
    (store) => store?.stats?.selectedMonth?.monthNum
  );
  const getData = async () => {
    const response = await fetch(FETCH_URL + `stats?month=${selectedMonth}`);
    const data = await response.json();
    dispatch(storeStats(data));
  };

  useEffect(() => {
    getData();
  }, [selectedMonth]);
};

export default useStats;
