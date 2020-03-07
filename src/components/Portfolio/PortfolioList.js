import React, { Component } from 'react';
import axios from 'axios';
import PortfolioItem from './PortfolioItem';

export default class PortfolioList extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    axios
      .get('http://localhost/2020/jfilipiak/wp-json/wp/v2/portfolio')
      .then(response => {
        this.setState({ items: response.data });
      });
  }
  render() {
    const posts = this.state.items.map(item => {
      return <PortfolioItem title={item.title.rendered} />;
    });
    return <>{posts}</>;
  }
}
