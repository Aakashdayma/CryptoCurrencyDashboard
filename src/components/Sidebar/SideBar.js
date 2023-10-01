import React, { useEffect, useCallback } from "react";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateC, updateCryptoList } from "../../reduxStore/cryptoCoinData";

export default function CoinList() {
  //Receiving crypto currency & coin data from the redux store
  const { currency } = useSelector((store) => store.currency);
  const { coins } = useSelector((store) => store.coins);
  const currencyLogo = {
    USD: "$ ",
    INR: "₹ ",
    GBP: "£ ",
    JPY: "¥ ",
    EUR: "€ ",
    RUB: "₽ ",
    AUD: "$ ",
    CAD: "$ ",
    KWD: "د.ك ",
    BTC: "₿ ",
    ETH: "♦ ",
    BNB: "BNB ",
  };

  // here declaring a const dispatch  in order to dispatch values to the store
  const dispatch = useDispatch();

  // Define fetchData using useCallback hook
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=200&page=1`
      );
      // Saving the data to redux store - Coins
      dispatch(updateC(response.data));
      dispatch(updateCryptoList(response.data.map((item) => item.id)));
    } catch (error) {
      // Logs the error
      console.log(error);
    }
  }, [currency, dispatch]);

  // Calls the function to fetch crypto data once the component mounts using useEffect hook.
  useEffect(() => {
    // Setting a timer so that the function is called once every 800ms.
    const timer = setTimeout(() => {
      // Call the fetchData function
      fetchData();
    }, 800);

    return () => clearTimeout(timer); // Clearing the timer
  }, [currency, fetchData]);

  return (
    <div className="min-w-[87vw] xl:min-w-[22.5vw] overflow-auto border-2 border-solid border-slate-100 rounded-lg shadow-md bg-white">
    <div className="p-3 px-5 text-lg font-bold text-center border-b-2 border-solid border-slate-150">
      <span>Cryptocurrency by Market Cap</span>
    </div>
    <div className="p-5 max-h-[75vh] overflow-auto">
      {coins &&
        coins.map((coin) => {
          return (
            <div className="my-8 flex flex-col" key={coin.id}>
              <div className="flex justify-between">
                <div className="flex">
                  <img src={coin.image} alt={coin.name} className="h-8" />
                  <span className="text-lg font-bold mx-2">{coin.name}</span>
                </div>
                <div>
                  <span
                    className={`text-md font-medium ${
                      coin.price_change_percentage_24h > 0
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {coin.price_change_24h > 0 ? (
                      <div className="inline-block">
                        <IoCaretUp />
                      </div>
                    ) : (
                      <div className="inline-block">
                        <IoCaretDown />
                      </div>
                    )}
                  </span>
                  {currencyLogo[currency]}
                  {coin.current_price}
                </div>
              </div>
              <div className="flex justify-between sm:border-b-2 sm:border-solid sm:border-slate-300 xl:border-0">
                <span className="text-sm text-slate-500">
                  Market Cap: {coin.market_cap}
                </span>
                <span
                  className={`text-[0.8rem] ${
                    coin.price_change_percentage_24h > 0
                      ? "text-green-600"
                      : "text-red-700"
                  }`}
                >
                  {coin.price_change_percentage_24h > 0 ? "+" : null}
                  {coin.price_change_percentage_24h}%
                </span>
              </div>
            </div>
          );
        })}
    </div>
  </div>
);
}
