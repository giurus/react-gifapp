import React from 'react';

const GifGridItem = ({ title, url }) => {
	return (
		<div className="col">
			<div className="card animate__animated animate__fadeIn">
				<img src={url} alt={title} height="170px" />
			</div>
			<h4>{title}</h4>
		</div>
	);
};

export default GifGridItem;
