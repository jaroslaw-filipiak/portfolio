import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = props => {
  console.log(props);
  return (
    <Link
      to={`portfolio/${props.item.slug}`}
      className="portfolio-item"
      style={{
        backgroundImage: `url(${props.item.better_featured_image.source_url})`
      }}
    >
      <div className="hover-box">
        <h1>{props.item.title.rendered}</h1>
      </div>
    </Link>
  );
};

export default PortfolioItem;
