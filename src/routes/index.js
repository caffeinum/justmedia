import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";


const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/news-:id-:query" component={About} />
  </Switch>
)

export default routes