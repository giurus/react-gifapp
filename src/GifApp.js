import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifApp = () => {
	const [category, setCategory] = useState(['One Punch Man']);

	return (
		<>
			<h2>GifApp</h2>
			<hr />
			<AddCategory setCategory={setCategory} />
			<ul>
				{category.map(item => (
					<GifGrid key={item} category={item} />
				))}
			</ul>
		</>
	);
};
