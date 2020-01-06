import React from 'react';

const handleClick = () => {
	console.log('handleClick from prev item ');
};

const PrevItemButton = () => (
	<span className="prev-item" onClick={handleClick}>
		Prev item
		{/* <ItemID /> */}
	</span>
);

export default PrevItemButton;
