import { createSlice } from "@reduxjs/toolkit";
export const coinDataSlice = createSlice({
  name: "coinData",
  initialState: {
    coins: [],
    cryptoName: "bitcoin",
    cryptoList: [],
    selectSellCrypto: "bitcoin",
    selectBuyCrypto: "ethereum",
  },
  reducers: {
    updateC: (state, action) => {
      state.coins = action.payload;
    },
    updateCryptoName: (state, action) => {
      state.cryptoName = action.payload;
    },
    updateCryptoList: (state, action) => {
      state.cryptoList = action.payload;
    },
    updateSelectSellCrypto: (state, action) => {
      state.selectSellCrypto = action.payload;
    },
    updateSelectBuyCrypto: (state, action) => {
      state.selectBuyCrypto = action.payload;
    },
  },
});

export const {
  updateC,
  updateCryptoName,
  updateCryptoList,
  updateSelectSellCrypto,
  updateSelectBuyCrypto,
} = coinDataSlice.actions;
export default coinDataSlice.reducer;