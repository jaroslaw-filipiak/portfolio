import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Sidebar from '../../components/Sidebar/Sidebar';

const HomeView = () => (
	<div className="wrapper homepage-wrapper">
		<Navigation />
		<Sidebar />
		<div className="hello">
			<h5>Jarosław Filipiak</h5>
			<h1>Designer &amp; front-end developer</h1>
			<h2>Projektuje oraz wdrażam kompletne serwisy internetowe</h2>
		</div>
	</div>
);

export default HomeView;
