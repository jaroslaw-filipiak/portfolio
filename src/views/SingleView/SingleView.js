import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Sidebar from '../../components/Sidebar/Sidebar';
import Single from './../../components/Portfolio/Single';

const SingleView = props => (
  <div className="wrapper single-wrapper">
    <Navigation />
    <Sidebar />
    <Single id={props.match.params.id} />
  </div>
);

export default SingleView;