import React from 'react';

const PortfolioItem = props => {
  const style = {
    backgroundImage: `url(${props.item.better_featured_image.source_url})`
  };
  return (
    <div className="portfolio-item" style={style}>
      <div className="hover-box">
        <h1>{props.item.title.rendered}</h1>
      </div>
    </div>
  );
};

export default PortfolioItem;
