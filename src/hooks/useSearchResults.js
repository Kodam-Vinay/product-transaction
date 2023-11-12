import { useDispatch, useSelector } from "react-redux";
import { FETCH_URL } from "../constants/Constants";
import { storeToSearchResults } from "../utils/storeSearchResultsSlice";
import { useEffect } from "react";

const useSearchResults = (searchInput, pageNo) => {
  const dispatch = useDispatch();
  const selectedMonth = useSelector(
    (store) => store?.stats?.selectedMonth?.monthNum
  );
  const getData = async () => {
    const response = await fetch(
      FETCH_URL +
        `search?search_q=${searchInput}&month=${selectedMonth}&page=${pageNo}&limit=10`
    );
    const data = await response.json();
    dispatch(storeToSearchResults(data?.data));
  };

  useEffect(() => {
    getData();
  }, [searchInput, selectedMonth, pageNo]);
};

export default useSearchResults;
