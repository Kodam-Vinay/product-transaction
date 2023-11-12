import { createSlice } from "@reduxjs/toolkit";

const storeStatsResultsSlice = createSlice({
  name: "stats",
  initialState: {
    selectedMonth: {
      monthNum: 3,
      name: "March",
    },
    statistics: {},
  },
  reducers: {
    storeSelectedMonth: (state, action) => {
      state.selectedMonth.monthNum = action.payload?.monthNum;
      state.selectedMonth.name = action.payload?.month;
    },
    storeStats: (state, action) => {
      state.statistics = action.payload;
    },
  },
});
export const { storeSelectedMonth, storeStats } =
  storeStatsResultsSlice.actions;
export default storeStatsResultsSlice.reducer;
