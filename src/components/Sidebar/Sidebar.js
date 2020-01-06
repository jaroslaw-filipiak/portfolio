import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookProvider, MessageUs, CustomChat } from 'react-facebook';

import MessengerIcon from './../../assets/img/svg/messenger.svg';

const Sidebar = props => (
	<>
		<div className="nav" style={props.style}>
			<div className="nav-grid-container">
				<div className="nav-top" id="logo">
					<Link to="/">JF</Link>
				</div>
				<div className="nav-center">
					{/* <img src={MessengerIcon} alt="Messenger" /> */}
					{/* <FacebookProvider appId="1403859393129851">
						<MessageUs
							messengerAppId="105438984152978"
							pageId="105438984152978"
						/>
					</FacebookProvider> */}

					{/* <FacebookProvider appId="1403859393129851" chatSupport>
						<CustomChat pageId="105438984152978" minimized={false} />
					</FacebookProvider> */}
				</div>
				<div className="nav-bottom">
					<a href="mailto:info@j-filipiak.pl">info@j-filipiak.pl</a>
					<a href="tel:663568828">+48 663 56 88 28</a>
				</div>
			</div>
		</div>
	</>
);

export default Sidebar;
