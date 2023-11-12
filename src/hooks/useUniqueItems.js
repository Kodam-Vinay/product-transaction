import { useDispatch, useSelector } from "react-redux";
import { FETCH_URL } from "../constants/Constants";
import { useEffect } from "react";
import { storeUniqValuesItems } from "../utils/storeUniqueItemsSlice";

const useUniqueItems = () => {
  const dispatch = useDispatch();
  const selectedMonth = useSelector(
    (store) => store?.stats?.selectedMonth?.monthNum
  );
  const getData = async () => {
    const response = await fetch(
      FETCH_URL + `unique-category?month=${selectedMonth}`
    );
    const data = await response.json();
    dispatch(storeUniqValuesItems(data));
  };

  useEffect(() => {
    getData();
  }, [selectedMonth]);
};

export default useUniqueItems;
