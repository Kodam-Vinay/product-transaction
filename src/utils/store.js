import { configureStore } from "@reduxjs/toolkit";
import storeSearchResultsSlice from "./storeSearchResultsSlice";
import storeStatsResultsSlice from "./storeStatsResultsSlice";
import storePriceRangeStatsSlice from "./storePriceRangeStatsSlice";
import storeUniqueItemsSlice from "./storeUniqueItemsSlice";

const store = configureStore({
  reducer: {
    searchResults: storeSearchResultsSlice,
    stats: storeStatsResultsSlice,
    priceRangeStats: storePriceRangeStatsSlice,
    uniquElements: storeUniqueItemsSlice,
  },
});
export default store;
