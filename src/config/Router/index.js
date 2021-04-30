import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, MyProfile } from "../../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <MyProfile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
