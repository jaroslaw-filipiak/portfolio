import React, { Component } from 'react';
import {connect} from 'react-redux'

class Single extends Component {
 
  render() {
    console.log(this.props)
    return (
      <div className="single">
      <div className="single-header">
        <img src={this.props.item.acf.header_image} alt="" />
        <a
          className="behance-btn"
          style={{ backgroundColor: `${this.props.item.acf.behance_link_kolor}` }}
          href={this.props.item.acf.behance_link}
        >
          Zobacz w serwisie behance
        </a>
      </div>
      <div className="single-content">
        <h1>{this.props.item.title.rendered}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: this.props.item.content.rendered }}
        ></div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state , ownProps) => {
let id = ownProps.id;
return {
  item: state.items.find(item => item.id == id)
}
}

export default connect(mapStateToProps)(Single)