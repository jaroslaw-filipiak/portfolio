import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogItem from './BlogItem';

class BlogList extends Component {
  render() {
    console.log(this.props.posts);
    const blogItems = this.props.posts.map(item => {
      return <BlogItem key={item.id} item={item} />;
    });
    return <>{blogItems}</>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(BlogList);
