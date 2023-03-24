import React, { Children } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Add } from "./assets/components/Add.js";

import { Cart } from "./page/Cart.js";
import { Childern } from "./page/Childern.js";
import { Flex } from "./page/Flex.js";
import { Home } from "./page/Home.js";
import { List } from "./page/List.js";
import { PageKhusus } from "./page/PageKhusus.js";
import { Produk } from "./page/Produk.js";
import { TestAxios } from "./page/TestAxios.js";

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
        <Route exact path="/flex">
          <Flex />
        </Route>
        <Route exact path="/axios">
          <TestAxios />
        </Route>
        <Route exact path="/childern">
          <Childern />
        </Route>
        {/*  yang di gunakan untuk context  */}

        <Route exact path="/list">
        <PageKhusus/>
        </Route>

       
      </Switch>
    </Router>
  );
};
