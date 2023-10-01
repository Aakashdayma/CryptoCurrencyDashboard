import React from "react";
import CurrencyDropdown from "./CurrencyDropdown";
import SearchBar from "./SearchBar";
import CryptoTrends from "./CryptoTrends";
import CryptoExchange from "./CryptoExchange";
import Portfolio from "./Portfolio";

export default function Dashboard() {
  return (
    <div className="min-w-[87vw] px-1 xl:min-w-[65vw]">
      {/* Top header section with currency dropdown and search bar */}
      <div className="flex my-5 xl:my-0 justify-between">
        <div className="basis-[10%]">
          {/* Currency dropdown component */}
          <CurrencyDropdown />
        </div>
        <div className="basis-[90%] md:mx-5">
          {/* Search bar component */}
          <SearchBar />
        </div>
      </div>
      {/* Main content section */}
      <div>
        {/* Component displaying crypto trends */}
        <CryptoTrends />
      </div>
      {/* Grid layout for portfolio and crypto converter */}
      <div className="grid place-content-center grid-cols-1 lg:grid-cols-2 rounded">
        <div className="my-4 xl:my-1 lg:mr-3">
          {/* Portfolio component */}
          <Portfolio />
        </div>
        <div className="my-4 xl:my-1 lg:ml-2">
          {/* Crypto converter component */}
          <CryptoExchange />
        </div>
      </div>
    </div>
  );
}
