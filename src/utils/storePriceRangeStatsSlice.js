import { createSlice } from "@reduxjs/toolkit";

const storePriceRangeStatsSlice = createSlice({
  name: "priceStats",
  initialState: {
    priceRangeData: [],
  },
  reducers: {
    storePriceStats: (state, action) => {
      state.priceRangeData = action.payload;
    },
  },
});
export const { storePriceStats } = storePriceRangeStatsSlice.actions;
export default storePriceRangeStatsSlice.reducer;
