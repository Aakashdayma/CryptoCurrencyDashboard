import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "./Charts";
import DropdownButton from "./DropdownButton";
import { updateCryptoName } from "../../reduxStore/cryptoCoinData";
import { updateDataDuration, updateDays } from "../../reduxStore/daysData";
import { updateActiveButton, updateCurrentChart } from "../../reduxStore/defaultState";

function CryptoTrends() {
  const { activeButton } = useSelector((state) => state.misc);
  const { cryptoList, cryptoName } = useSelector((state) => state.coins);
  const { currentChart } = useSelector((state) => state.misc);
  const timeline = ["1D", "1W", "1M", "6M", "1Y"];
  const chartVariant = ["Line Chart", "Bar - Horizontal", "Bar - Vertical"];
  // const currentChart = ["Line Chart"];
  let day;
  let duration;
  const dispatch = useDispatch();
  const handleChange = (crypto) => {
    dispatch(updateCryptoName(crypto));
  };

  const handleChangeList = (chart) => {
    dispatch(updateCurrentChart(chart));
  };

  const handleTimeChange = (time) => {
    switch (time) {
      case "1D":
        day = 1;
        duration = "Hourly";
        break;
      case "1W":
        day = 7;
        duration = "daily";
        break;
      case "1M":
        day = 31;
        duration = "daily";
        break;
      case "6M":
        day = 183;
        duration = "daily";
        break;
      case "1Y":
        day = 365;
        duration = "daily";
        break;
      default:
        day = 1;
        duration = "Hourly";
    }
    // console.log(day);
    dispatch(updateDays(day));
    dispatch(updateDataDuration(duration));
    dispatch(updateActiveButton(time));
  };

  return (
    <div className="p-2 my-4 mx-1 w-[100%] overflow-x-auto overflow-y-hidden border-2 border-solid border-slate-50 rounded-lg shadow-md bg-white ">
      <div className="flex flex-wrap justify-space between">
        <div className="flex items-center justify-center">
          <div
            className="inline-flex flex-wrap md:flex-nowrap  transition duration-150 ease-in-out lg:w-[45vw] justify-end"
            role="toolbar"
          >
            {timeline.map((time) => {
              return (
                <button
                  type="button"
                  className= {`mx-1 my-2 md:my-0 rounded-md inline-block border-2 border-primary hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] hover:border-primary-600 focus:border-blue-700 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black hover:text-blue-600 focus:text-blue-600 active:text-blue-600 transition duration-150 ease-in-out focus:bg-white focus:outline-none focus:ring-0 shadow-md ${
                    activeButton === time ? "active" : null
                  }`}
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={(e) => handleTimeChange(time)}
                  key={time}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
        <div className=" flex">
          <div className="mx-4 my-2">
            <DropdownButton
              name={cryptoName}
              list={cryptoList}
              handleChange={handleChange}
            />
          </div>
          <div className="my-2">
            <DropdownButton
              name={currentChart}
              list={chartVariant}
              handleChange={handleChangeList}
            />
          </div>
        </div>
      </div>
      <div>
        <Chart />
      </div>
    </div>
  );
}
export default CryptoTrends;