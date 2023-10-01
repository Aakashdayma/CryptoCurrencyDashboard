import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../reduxStore/currencyData";

function CurrencyDropdown() {
  // Get the selected currency from the Redux store
  const { currency } = useSelector((store) => store.currency);

  // Define a list of available currencies
  const currencyList = [
    "USD",
    "INR",
    "GBP",
    "JPY",
    "EUR",
    "RUB",
    "AUD",
    "CAD",
    "KWD",
    "BTC",
    "ETH",
    "BNB",
  ];

  // Initialize a state variable to control the dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  // Function to handle currency selection
  const handleChange = (currencies) => {
    // Dispatch an action to update the selected currency in Redux store
    dispatch(update(currencies));

    // Close the dropdown
    setIsDropdownOpen(false);
  };

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="relative" data-te-dropdown-ref>
        <button
          className ="flex items-center whitespace-nowrap rounded bg-white px-6 pt-2.5 pb-2 text-xs font-bold uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-400 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
          type="button"
          id="dropdownMenuButton1"
          data-te-dropdown-toggle-ref
          aria-expanded={isDropdownOpen}
          onClick={toggleDropdown}
        >
          {currency}
          <span className="ml-2 w-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        {isDropdownOpen && (
          <ul
            className="absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-centre text-base shadow-lg dark:bg-neutral-700"
            aria-labelledby="dropdownMenuButton1"
            data-te-dropdown-menu-ref
          >
            {currencyList.map((currencies, i) => (
              <li key={i}>
                <div
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  data-te-dropdown-item-ref
                  onClick={() => handleChange(currencies)}
                >
                  {currencies}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CurrencyDropdown;
