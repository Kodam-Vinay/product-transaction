import { createSlice } from "@reduxjs/toolkit";

const storeSearchResultsSlice = createSlice({
  name: "searchResults",
  initialState: {
    searchResponse: [],
  },
  reducers: {
    storeToSearchResults: (state, action) => {
      state.searchResponse = action.payload;
    },
  },
});

export const { storeToSearchResults, storeSelectedMonth } =
  storeSearchResultsSlice.actions;

export default storeSearchResultsSlice.reducer;
