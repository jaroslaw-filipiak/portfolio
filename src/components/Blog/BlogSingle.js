import React from 'react';
import { connect } from 'react-redux';

const BlogSingle = props => {
  console.log(props.post);
  return (
    <div className="single-post">
      <h1> {props.post.title.rendered}</h1>
    </div>
  );
};

const mapStateToProps = (state, Ownprops) => {
  let id = Ownprops.post.match.params.id;
  return {
    post: state.posts.find(post => post.id == id)
  };
};

export default connect(mapStateToProps)(BlogSingle);
