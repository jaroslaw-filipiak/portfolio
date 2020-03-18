import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Sidebar from '../../components/Sidebar/Sidebar';
import BlogSingle from '../../components/Blog/BlogSingle';

const PostView = props => (
  <div className="wrapper single-post-wrapper">
    <Navigation />
    <Sidebar />
    <BlogSingle post={props} />
  </div>
);

export default PostView;
