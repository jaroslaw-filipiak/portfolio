import React from 'react';

const SingleContent = props => {
  console.log(props);
  // const style = {
  //   backgroundImage: `url(${props.item.acf.header_image})`
  // };
  return (
    <div className="single">
      <div className="single-header">
        <img src={props.item.acf.header_image} alt="" />
        <a
          className="behance-btn"
          style={{ backgroundColor: `${props.item.acf.behance_link_kolor}` }}
          href={props.item.acf.behance_link}
        >
          Zobacz w serwisie behance
        </a>
      </div>
      <div className="single-content">
        <h1>{props.item.title.rendered}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: props.item.content.rendered }}
        ></div>
      </div>

      {/* <img src={props.item.acf.header_image} alt={props.item.slug} />
      {props.item.better_featured_image.source_url} */}
    </div>
  );
};
export default SingleContent;
