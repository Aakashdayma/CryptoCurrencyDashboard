import React, { useState } from "react";

function DropdownButton({ name, list, handleChange }) {
  // State to track whether the dropdown is open or closed
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown open or closed
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle the click on an item in the dropdown list
  const handleItemClick = (selectedItem) => {
    // Call the provided handleChange function with the selected item
    handleChange(selectedItem);
    // Close the dropdown
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative" data-te-dropdown-ref>
      {/* Button that toggles the dropdown */}
      <button
        className="flex items-center whitespace-nowrap rounded bg-gray-200 px-6 pt-2.5 pb-2 text-xs font-bold uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-300 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
        type="button"
        id="dropdownMenuButton1"
        data-te-dropdown-toggle-ref
        aria-expanded="false"
        data-te-ripple-init
        data-te-ripple-color="primary"
        onClick={toggleDropdown}
      >
        {name}
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
      {/* Dropdown list */}
      <ul
        className={`absolute max-h-[30vh] overflow-auto z-[1000] float-left m-0 ${
          isDropdownOpen ? "" : "hidden"
        }`}
        aria-labelledby="dropdownMenuButton1"
        data-te-dropdown-menu-ref
      >
        {/* Render each item in the list */}
        {list.map((item, i) => {
          return (
            <li key={i}>
              <div
                className="block w-full whitespace-nowrap bg-white py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 text-centre dark:hover:bg-neutral-600"
                data-te-dropdown-item-ref
                onClick={() => handleItemClick(item)}
              >
                {item.toUpperCase()}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropdownButton;

