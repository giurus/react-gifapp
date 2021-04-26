import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	return (
		<>
			<hr />
			<h3>Search: {category}</h3>
			<hr />
			<div className="row row-cols-1 row-cols-md-4 g-3">
				{loading && (
					<div className="spinner-border mx-auto" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				)}
				{images.map(img => (
					<GifGridItem key={img.id} {...img} />
				))}
				{images.length === 0 && loading === false && <h5 className="text-muted">No results found</h5>}
			</div>
		</>
	);
};

export default GifGrid;
