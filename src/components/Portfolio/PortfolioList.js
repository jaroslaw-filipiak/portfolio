import React, { Component } from 'react';
import axios from 'axios';
import PortfolioItem from './PortfolioItem';

export default class PortfolioList extends Component {
	state = {
		items: [],
		isLoading: false,
	};

	componentDidMount() {
		axios
			.get('https://www.j-filipiak.pl/api/wp-json/wp/v2/portfolio?embded')
			.then((response) => {
				this.setState({
					items: response.data,
					isLoading: true,
				});
			});
	}

	render() {
		const posts = this.state.items.map((item) => {
			return <PortfolioItem key={item.id} item={item} />;
		});

		return this.state.isLoading ? posts : 'czekaj...';
	}
}
