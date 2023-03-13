import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../assets/components/Navbar";

export const Produk = () => {

  let data = useLocation();

  return (
    <div>
      <Navbar />
      <h1>nama Saya  :  {data.state.namaSaya}</h1>
      <h1>Umur Saya  :  {data.state.umurSaya}</h1>
      Produk
    </div>
  );
};


export default  Produk

