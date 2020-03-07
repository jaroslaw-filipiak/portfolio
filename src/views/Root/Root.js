import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeView from '../HomeView/HomeView';
import AboutMeView from '../AboutMeView/AboutMeView';
import BlogView from '../BlogView/BlogView';
import ContactView from '../ContactView/ContactView';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeView}></Route>
      <Route path="/about-me" component={AboutMeView}></Route>
      <Route path="/blog" component={BlogView}></Route>
      <Route path="/contact" component={ContactView}></Route>
    </Switch>
  </BrowserRouter>
);

export default Root;
