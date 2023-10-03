import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="contaier-fluid mb-4">
      <div className="container d-flex flex-column align-items-center px-5">
        <h1>Feature Listed Property</h1>
        <p className="w-50 text-center">
          Real state can be bought, sold, leased, or rented, and can be a
          valuable investment opportunity, The value of real estate can be...
        </p>
      </div>
    <nav className=""> 
      <NavLink to="/" >New York</NavLink>
      <NavLink to="/mumbai">Mumbai</NavLink>
      <NavLink to="/paris" >Paris</NavLink>
      <NavLink to="/london">London</NavLink>
    </nav>
    </div>
  );
};

export default Header;
