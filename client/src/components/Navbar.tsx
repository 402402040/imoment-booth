import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav style={{marginLeft: "25px"}}>
        <div style={{ zIndex: 1 }}>
          <Link to="/">服務介紹</Link>
        </div>
        <div style={{ zIndex: 1 }}>
          <Link to="/order">預約方式</Link>
        </div>
      </nav>
    </div>
  );
};
