import { createSlice } from "@reduxjs/toolkit";

const CurrencySlice = createSlice({
  name: "currency",
  initialState: {
    currency: "USD",
  },
  reducers: {
    update: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { update } = CurrencySlice.actions;
export default CurrencySlice.reducer;