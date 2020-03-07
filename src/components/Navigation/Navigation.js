import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  handleVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  routeChange = () => {
    window.location.href = 'portfolio';
  };

  render() {
    return (
      <>
        <div className={this.state.isVisible ? 'menu' : 'menu d-none'}>
          <Link to="/about-me" className="menu-left">
            O mnie
          </Link>

          <Link to="/contact" className="menu-right">
            Kontakt
          </Link>
        </div>

        <button
          onClick={this.handleVisible}
          className={`hamburger hamburger--vortex ${
            this.state.isVisible ? 'is-active' : null
          }`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </>
    );
  }
}

export default Navigation;
