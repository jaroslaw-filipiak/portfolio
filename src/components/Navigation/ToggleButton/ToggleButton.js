import React, { Component } from 'react';

class ToggleButton extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<button className="hamburger hamburger--vortex" type="button">
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</button>
		);
	}
}

export default ToggleButton;
