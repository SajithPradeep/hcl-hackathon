import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProductDashboardPage from "../components/ProductDashboardPage";
import ProductCartPage from "../components/ProductCartPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <div>
      <Switch>
        <Route path="/" component={ProductDashboardPage} exact={true} />
        <Route path="/cart" component={ProductCartPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
