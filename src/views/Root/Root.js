import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeView from '../HomeView/HomeView';
import AboutMeView from '../AboutMeView/AboutMeView';
import BlogView from '../BlogView/BlogView';
import ContactView from '../ContactView/ContactView';
import PortfolioView from '../PortfolioView/PortfolioView';
import PortfolioListItems from '../../components/PortfolioListItems/PortfolioListItems';

const Root = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={HomeView}></Route>
			<Route path="/about-me" component={AboutMeView}></Route>
			<Route path="/blog" component={BlogView}></Route>
			<Route path="/contact" component={ContactView}></Route>
			<Route
	exact
	path="/portfolio/"
	component={() => <PortfolioView slider="MobileApps"/>}
	/>
			<Route
	exact
	path="/portfolio/aplikacje-mobilne"
	component={() => <PortfolioView slider="MobileApps"/>}
	/>
			<Route
	exact
	path="/portfolio/strony-internetowe"
	component={() => <PortfolioView slider="Webdesign"/>}
	/>
			<Route
	exact
	path="/portfolio/pozostale-projekty-graficzne"
	component={() => <PortfolioView slider="Other"/>}
	/>
		</Switch>
	</BrowserRouter>
);

export default Root;
