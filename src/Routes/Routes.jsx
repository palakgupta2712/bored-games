import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";

function Routes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Routes;
