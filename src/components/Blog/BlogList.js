import React, { Component } from 'react';
import BlogItem from './BlogItem';
import axios from 'axios';

export default class BlogList extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const postsRes = await axios({
      method: 'GET',
      url: 'https://www.j-filipiak.pl/api/wp-json/wp/v2/posts'
    });

    // const fetchedPosts = postsRes.data;

    this.setState({
      posts: postsRes.data
    });
  }

  render() {
    const blogItems = this.state.posts.map(item => {
      return <BlogItem key={item.id} item={item} />;
    });
    return <>{blogItems}</>;
  }
}
