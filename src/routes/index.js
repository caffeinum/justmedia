import React from "react";
import { Route, Switch } from "react-router-dom";

import News from "../pages/News";
import Home from "../pages/Home";
import AboutNews from "../pages/aboutNews";
import About from "../pages/about";


const routes = (
  <Switch>
    <Route exact path="/" component={News} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/news-:id-:query" component={AboutNews} />
  </Switch>
)

export default routes
