import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategory }) => {
	const [title, setTitle] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		title.trim().length > 2 && setCategory(cat => [title, ...cat]);
		setTitle('');
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" className="form-control" placeholder="Search..." onChange={e => setTitle(e.target.value)} value={title} />
			</form>
			<hr />
			<h3>List</h3>
		</>
	);
};

AddCategory.propTypes = {
	setCategory: PropTypes.func.isRequired
};

export default AddCategory;
