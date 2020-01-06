import React, { Component } from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import Sidebar from '../../../components/Sidebar/Sidebar';
import PortfolioListItems from '../../../components/PortfolioListItems/PortfolioListItems';
import PortfolioTopBar from '../../../components/PortfolioListItems/PortfolioTopBar/PortfolioTopBar';

class PortfolioView extends Component {
	render() {
		return (
			<div className="wrapper portfolio-wrapper h-100">
				<Navigation />
				<Sidebar style={{ position: 'absolute' }} />
				<PortfolioTopBar />
				<PortfolioListItems />
			</div>
		);
	}
}

export default PortfolioView;
