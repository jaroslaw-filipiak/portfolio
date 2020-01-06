import React, { Component } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PortfolioItem from './PortfolioItem/Portfolioitem';

import bg1 from './../../assets/img/test1.jpg';
import bg2 from './../../assets/img/test2.jpg';
import bg3 from './../../assets/img/wa-bg.jpg';
import bg4 from './../../assets/img/shipcoin-bg.jpg';

class PortfolioListItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			MobileApps: [
				{
					id: 1,
					name: 'Agnes | Aplikacja mobilna + strona www',
					link: 'http://agnes-painkiller.com',
					backgroundImageURL: bg1
				},
				{
					id: 2,
					name: 'Wejściówka mobile app',
					link: 'www.google.pl',
					backgroundImageURL: bg2
				}
			],

			Webdesign: [
				{
					id: 3,
					name: 'What About - webdesign',
					link: 'www.google.pl',
					backgroundImageURL: bg3
				},
				{
					id: 3,
					name: 'Shipscoin',
					link: 'www.google.pl',
					backgroundImageURL: bg4
				}
			],
			Other: [
				{
					id: 3,
					name: 'Other1',
					link: 'www.google.pl',
					backgroundImageURL: bg1
				}
			]
		};
	}

	//slider = this.props.slider;
	// MobileApps or Webdesign

	render() {
		var settings = {
			dots: false,
			infinite: true,
			speed: 200,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		return (
			<>
				<Slider {...settings}>
					{this.state[this.props.slider].map(item => (
						<PortfolioItem
							key={item.id}
							name={item.name}
							link={item.link}
							backgroundImageURL={item.backgroundImageURL}
							offset={item.offset}
							current={item.current}
						/>
					))}
				</Slider>
			</>
		);
	}
}

export default PortfolioListItems;
