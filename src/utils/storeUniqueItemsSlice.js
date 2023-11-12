import { createSlice } from "@reduxjs/toolkit";

const storeUniqueItemsSlice = createSlice({
  name: "uniqueItems",
  initialState: {
    uniqueItemsList: [],
  },
  reducers: {
    storeUniqValuesItems: (state, action) => {
      state.uniqueItemsList = action.payload;
    },
  },
});
export const { storeUniqValuesItems } = storeUniqueItemsSlice.actions;
export default storeUniqueItemsSlice.reducer;
