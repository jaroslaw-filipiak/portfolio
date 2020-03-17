import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = props => {
  const style = {
    backgroundImage: `url(${props.item.better_featured_image.source_url})`
  };
  return (
    <Link to={`/portfolio/${props.item.id}`}>
      <div className="portfolio-item" style={style}>
        <div className="hover-box">
          <h1>{props.item.title.rendered}</h1>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;
