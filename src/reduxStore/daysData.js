import { createSlice } from "@reduxjs/toolkit";

const daysDataSlice = createSlice({
  name: "daysData",
  initialState: {
    days: 1,
    dataDuration: "daily",
  },
  reducers: {
    updateDays: (state, action) => {
      state.days = action.payload;
    },
    updateDataDuration: (state, action) => {
      state.dataDuration = action.payload;
    },
  },
});

export const { updateDays, updateDataDuration } = daysDataSlice.actions;
export default daysDataSlice.reducer;