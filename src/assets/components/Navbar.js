import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import Logo from "../img/image.png";

export const Navbar = () => {
  let history = useHistory();




  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>

      <Link
        to={{
          pathname: "/product",
          state: { namaSaya: "bagas"  , umurSaya : "80"},
        }}
      >
        tesssssfff
      </Link>

      <NavLink
        to={{
          pathname: "/product",
          state: { namaSaya: "bagas"  , umurSaya : "80"},
        }}
      >
        tesssssfff
      </NavLink>

      {/* ============== */}
      <button
        onClick={() => {
          history.push("/cart");
        }}
      >
        testing aja cart
      </button>

      <span
        onClick={() => {
          history.push("/cart");
        }}
      >
        testing aja cart
      </span>

      <hr
        onClick={() => {
          history.push("/cart");
        }}
      ></hr>

      <div
        onClick={() => {
          history.push("/cart");
        }}
      >
        testing aja{" "}
      </div>

      <input
        onChange={(e) => {
          if (e.target.value.length == 5) {
            history.push("/cart");
          }
        }}
      />

      <img
     
        onClick={() => {
          history.push("/cart");
        }}
        alt=""
        src={Logo}
      />
    </div>
  );
};

// pathname adalah tujuan yang kita tuju
