import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../containers/home";
import About from "../containers/about";


const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={About} />
  </Switch>
)

export default routes
