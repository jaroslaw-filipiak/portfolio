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
						<div className="menu-info">
							<p>
								Specjalizuje się w projektowaniu oraz wdrażaniu stron
								internetowych opartych o system Wordpress a także projektowaniem
								(...)
							</p>
						</div>
					</Link>
					<Link to="/portfolio" className="menu-center">
						<div>
							Portfolio
							<div className="menu-info">
								<ul>
									<li>
										<Link to="/portfolio/aplikacje-mobilne">
											Aplikacje mobilne
										</Link>
									</li>
									<li>
										<Link to="/portfolio/strony-internetowe">
											Strony internetowe
										</Link>
									</li>
									<li>
										<Link to="/portfolio/pozostale-projekty-graficzne">
											Pozostałe projekty graficzne
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</Link>

					<Link to="/contact" className="menu-right">
						Kontakt
						<div className="menu-info">
							<p>
								Jestem dostępny dla firm , agencji kreatywnych oraz osób
								prywatnych Zlecenia wyceniam jako fixed-price dla jasno
								sprecyzowanych (...)
							</p>
						</div>
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
