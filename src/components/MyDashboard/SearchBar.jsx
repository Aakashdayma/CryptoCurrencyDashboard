import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCryptoName } from "../../reduxStore/cryptoCoinData";
import { updateDataDuration, updateDays } from "../../reduxStore/daysData";
import { updateActiveButton } from "../../reduxStore/defaultState";

function SearchBar() {
  const searchRef = useRef();
  const [searchBar, setSearchBar] = useState();
  const { coins } = useSelector((state) => state.coins);

  const coinName = coins.map((coin) => coin.id);
  const coinID = coins.map((coin) => coin.symbol);
  const coinAltName = coins.map((coin) => coin.name);

  const dispatch = useDispatch();
  const handleValueChange = (e) => {
    setSearchBar(e.target.value.toLowerCase());
  };
  const handleSearch = () => {
    // Check if searchBar is defined and not empty
    if (searchBar) {
      const searchedCoins = coinName.filter((item) => item.includes(searchBar));
      const searchedID = coinID.filter((item) => item.includes(searchBar));
      const searchedName = searchBar.charAt(0).toUpperCase() + searchBar.slice(1);
      const searchedCoinName = coinAltName.filter((item) =>
        item.includes(searchedName)
      );
  
      if (searchedCoins.length > 0 || searchedID.length > 0 || searchedCoinName.length > 0) {
        if (searchedCoins[0] === searchBar) {
          dispatch(updateCryptoName(searchedCoins[0]));
          console.log("entering first");
        } else if (searchedID[0] === searchBar) {
          dispatch(
            updateCryptoName(
              coinName[coins.map((id) => id.symbol).indexOf(searchBar)]
            )
          );
          console.log("entering second");
        } else if (searchedCoinName.length > 0 && searchedCoinName[0].includes(searchedName)) {
          dispatch(
            updateCryptoName(
              coinName[coins.map((id) => id.name).indexOf(searchedCoinName[0])]
            )
          );
        } else {
          dispatch(updateCryptoName(searchedCoins[0]));
          console.log("entering last");
        }
        dispatch(updateDays(1));
        dispatch(updateDataDuration("hourly"));
        dispatch(updateActiveButton("1D"));
      }
    }
  
    // to reset the search input field
    searchRef.current.value = "";
  };
  return (
    <div className="flex justify-center bg-white">
      <div className="w-full">
        <div className="relative flex w-full flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-1 border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-gray-300 dark:text-neutral-500 dark:placeholder:text-neutral-500"
            placeholder="Search by coin"
            aria-label="Search"
            aria-describedby="button-addon1"
            onChange={(e) => handleValueChange(e)}
            ref={searchRef}
          />
          <button
            className="relative z-[2] flex items-center rounded-r bg-blue-800 rounded-md px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-dark focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
