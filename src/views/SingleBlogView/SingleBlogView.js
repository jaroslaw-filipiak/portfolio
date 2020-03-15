import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Sidebar from '../../components/Sidebar/Sidebar';
import SingleBlogItem from './../../components/Blog/SingleBlogItem';

const SingleBlogView = props => (
  <div className="wrapper single-wrapper">
    <Navigation />
    <Sidebar />
    <SingleBlogItem slug={props.match.params.slug} />{' '}
  </div>
);

export default SingleBlogView;
