import React, { Component } from 'react';
import axios from 'axios';
import SingleContent from './SingleContent';

export default class Single extends Component {
	state = {
		items: [],
		isLoading: false,
	};

	componentDidMount() {
		console.log(this.props.slug);
		axios
			.get(
				`https://www.j-filipiak.pl/api/wp-json/wp/v2/portfolio?slug=${this.props.slug}}`
			)
			.then((response) => {
				this.setState({
					items: response.data,
					isLoading: true,
				});
			});
	}

	render() {
		const item = this.state.items.map((item) => {
			return (
				<SingleContent key={item.id} item={item} category={item.categories} />
			);
		});
		return this.state.isLoading ? item : 'czekaj...';
	}
}
