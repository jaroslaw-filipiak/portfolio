import React from 'react';
import { Link } from 'react-router-dom';
import arrowDown from './../../../assets/img/svg/arrow-down.svg';

const PortfolioTopBar = props => {
	const style = {
		maxWidth: '19px',
		position: 'relative',
		left: '10px',
		top: '3px'
	};

	return (
		<>
			<div className="portfolio-top-bar">
				<div className="portfolio-top-bar-items">
					<p>Portfolio:</p>
					<ul className="portfolio-menu">
						<ul className="submenu">
							<Link to="/portfolio/aplikacje-mobilne">
								<li>Aplikacje mobilne</li>
							</Link>
							<Link to="/portfolio/strony-internetowe">
								<li>Strony internetowe</li>
							</Link>
							<Link to="/portfolio/pozostale-projekty-graficzne">
								<li>Pozostałe projekty graficzne</li>
							</Link>
						</ul>
					</ul>
				</div>
			</div>
		</>
	);
};

export default PortfolioTopBar;
