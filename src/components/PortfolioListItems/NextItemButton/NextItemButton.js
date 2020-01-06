import React from 'react';

const handleClick = () => {
	console.log('handleClick from next item ');
};

const NextItemButton = () => (
	<div className="next-item" onClick={handleClick}>
		next item
		{/* <ItemID /> */}
	</div>
);

export default NextItemButton;
