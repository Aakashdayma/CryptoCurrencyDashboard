import React, { useState } from "react";
import DropdownButton from "./DropdownButton";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectBuyCrypto, updateSelectSellCrypto } from "../../reduxStore/cryptoCoinData";
import InputText from "./InputText";

function CryptoExchange() {
  const [SellItem, setSellItem] = useState(0);
  const [buyItem, setbuyItem] = useState('');
  const dispatch = useDispatch();
  const { coins, cryptoList, selectSellCrypto, selectBuyCrypto } = useSelector((state) => state.coins);

  const handleExchange = () => {
    const sellingCryptoPrice = coins.find((coin) => coin.id === selectSellCrypto).current_price;
    const buyingCryptoPrice = coins.find((coin) => coin.id === selectBuyCrypto).current_price;
    setbuyItem(((SellItem * sellingCryptoPrice) / buyingCryptoPrice).toFixed(8));
  };

  const handleOnChangeSellItem = (value) => {
    setSellItem(value);
  };

  const handleSellCrypto = (listItem) => {
    dispatch(updateSelectSellCrypto(listItem));
  };

  const handleBuyCrypto = (listItem) => {
    dispatch(updateSelectBuyCrypto(listItem));
  };

  return (
    <div className="bg-white h-full rounded-md shadow-lg col-span-1 p-5">
      <div className="font-bold text-xl grid justify-center" >Exchange Coins </div>
      <div className="">
        <div className="grid place-content-center grid-cols-1 lg:grid-cols-2 my-5">
          <div className="flex items-center">
            <div className="font-semibold text-lg text-Black-800">Sell:</div>
            <div className="mx-5 " >
              <DropdownButton
                name={selectSellCrypto}
                list={cryptoList}
                handleChange={handleSellCrypto}
              />
            </div>
          </div>
          <div className="mt-5 lg:mt-0">
            
          <InputText
              name={"Enter amount"}
              placeholder={"     Enter value"}
              funct={handleOnChangeSellItem}
            />
          </div>
        </div>
        <div className="grid place-content-center grid-cols-1 lg:grid-cols-2 my-5">
          <div className="flex items-center">
            <div className="font-semibold text-lg text-Black-800">Buy:</div>
            <div className="mx-5">
              <DropdownButton
                name={selectBuyCrypto}
                list={cryptoList}
                handleChange={handleBuyCrypto}
              />
            </div>
          </div>
          <div className="mt-5 lg:mt-0">
            <InputText disabled={true} value={buyItem} />
          </div>
        </div>
        <div className="grid justify-center">
          <button
            type="button"
            className="my-3 inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal bg-blue-600 text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            onClick={handleExchange}
          >
            Exchange
          </button>
        </div>
      </div>
    </div>
  );
}

export default CryptoExchange;
