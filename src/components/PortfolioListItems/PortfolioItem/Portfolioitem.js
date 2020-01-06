import React from 'react';

const Portfolioitem = props => {
	return (
		<div
			className="portfolio-item"
			style={{ backgroundImage: `url(${props.backgroundImageURL})` }}
		>
			<h1>{props.name}</h1>
		</div>
	);
};

export default Portfolioitem;
