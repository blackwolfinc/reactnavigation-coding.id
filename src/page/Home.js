import React from "react";
import { Navbar } from "../assets/components/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      {process.env.REACT_APP_TITLE}

    </div>
  );
};
