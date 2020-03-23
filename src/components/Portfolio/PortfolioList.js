import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

import { connect } from 'react-redux';

class PortfolioList extends Component {
  render() {
    // console.log('==========');
    console.log(this.props.items);
    // console.log('==========');
    const posts = this.props.items.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
    return <> {posts} </>;
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(PortfolioList);
