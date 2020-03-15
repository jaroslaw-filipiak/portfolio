import React, { Component } from 'react';
import axios from 'axios';
import SingleContent from './SingleContent';

export default class Single extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    console.log(this.props.slug);
    axios
      .get(
        `http://j-filipiak.pl/api/wp-json/wp/v2/portfolio?slug=${this.props.slug}}`
      )
      .then(response => {
        this.setState({
          items: response.data
        });
      });
  }

  render() {
    const item = this.state.items.map(item => {
      return <SingleContent key={item.id} item={item} />;
    });
    return <> {item} </>;
  }
}
