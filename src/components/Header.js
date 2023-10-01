import React from "react";
import "../index.css";

 function Header() {
  return (
    <div >
      <nav className='container-fluid p-2' style={{height:"70px",width:"100%",backgroundColor: 'white', paddingLeft :'80px'}}>
      <div className='p-2' ><b style={{backgroundColor:'red', color:"white", fontSize : '25px'}}>Al</b><b style={{fontSize : '25px'}}>mabetter</b></div>
    </nav>
    </div>
  );
}
export default Header;