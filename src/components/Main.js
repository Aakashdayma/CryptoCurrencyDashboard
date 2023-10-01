import React from "react";
import Sidebar from './Sidebar/SideBar'
import Dashboard from "./MyDashboard/Dashboard";

 function Main() {
  return (
    <div className="my-5 mx-2 md:mx-10 px-2 py-5 min-h-[80vh] border-2 rounded-md shadow-full" style={{backgroundColor :"rgb(225, 255, 255)"}}>
      {/* Main component */}
      <div className="grid grid-cols-1 xl:grid-cols-12">
        <div className="grid place-content-center col-span-1 xl:col-span-9">
          <Dashboard />
        </div>
        <div className="grid place-content-center col-span-1 xl:col-span-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
export default Main;