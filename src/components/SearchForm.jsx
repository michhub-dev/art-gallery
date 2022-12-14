import './SearchForm.css';

import { useState } from 'react';

export function SearchForm({ onSearchSubmit, displayArt }) {
	const [query, setQuery] = useState('');

	function handleInputChange(evt) {
		setQuery(evt.target.value);
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		onSearchSubmit(query); //call the api on submit
	}

	return (
		<form className="Form" role="search" onSubmit={handleFormSubmit}>
			<label className="label" htmlFor="search-field">
				Search for some art
			</label>
			<input
				className="input"
				id="search-field"
				inputMode="search"
				name="query"
				type="text"
				value={query}
				onChange={handleInputChange}
			/>
			<button className="button" type="submit">
				Search
			</button>
		</form>
	);
}
