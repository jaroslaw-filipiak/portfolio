import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Sidebar from '../../components/Sidebar/Sidebar';
import BlogList from '../../components/Blog/BlogList';

const HomeView = () => (
  <div className="wrapper blog-wrapper">
    <Navigation />
    <Sidebar />
    <div className="blog-list">
      <BlogList />
    </div>
  </div>
);

export default HomeView;
