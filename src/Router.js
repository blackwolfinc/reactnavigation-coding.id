import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Cart } from "./page/Cart.js";
import { Home } from "./page/Home.js";
import { Produk } from "./page/Produk.js";

export const Routers = () => {
  return (
    <Router>
      <Switch>
    
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>

        <Route exact path="/product">
          <Produk />
        </Route>

      </Switch>
    </Router>
  );
};
