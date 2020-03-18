import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeView from '../HomeView/HomeView';
import AboutMeView from '../AboutMeView/AboutMeView';
import ContactView from '../ContactView/ContactView';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import SingleView from '../../views/SingleView/SingleView';
import BlogView from '../../views/BlogView/BlogView';
import PostView from '../../views/PostView/PostView';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeView}></Route>
      <Route path="/about-me" component={AboutMeView}></Route>
      <Route path="/contact" component={ContactView}></Route>
      <Route exact path="/blog" component={BlogView}></Route>
      <Route path="/blog/:id" component={PostView}></Route>
      <Route path="/portfolio/:id" component={SingleView}></Route>
      <Route component={ErrorPage}> /></Route>
    </Switch>
  </BrowserRouter>
);

export default Root;
