import { createSlice } from "@reduxjs/toolkit";

const defaultSlice = createSlice({
  name: "default",
  initialState: {
    activeButton: "1D",
    currentChart: "Line Chart",
  },
  reducers: {
    updateActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },
    updateCurrentChart: (state, action) => {
      state.currentChart = action.payload;
    },
  },
});

export const { updateActiveButton, updateCurrentChart } = defaultSlice.actions;
export default defaultSlice.reducer;