import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = props => {
  return (
    <div>
      <Link to={`/blog/${props.item.id}`}>
        <h1>{props.item.title.rendered}</h1>
      </Link>
    </div>
  );
};

export default BlogItem;
