import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Sidebar from '../../components/Sidebar/Sidebar';
import PortfolioList from '../../components/Portfolio/PortfolioList';

const HomeView = () => (
	<div className="wrapper homepage-wrapper">
		<Navigation />
		<Sidebar />
		<div className="heading-content">
			<p>
				Witam bardzo serdecznie{' '}
				<span role="img" aria-label="emoji">
					🖐
				</span>
			</p>
			<h1>Jarosław Filipiak</h1>
			<h2>designer & front - end developer</h2>
		</div>
		<div className="portfolio-list">
			<PortfolioList />
		</div>
	</div>
);

export default HomeView;
