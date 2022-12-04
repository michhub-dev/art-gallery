import './App.css';
import { ImageDetailsPage } from './ImageDetailsPage';
import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { useState } from 'react';

export function App() {
	const [galleryItems, setGalleryItems] = useState([]);
	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js
		searchArtworks(query).then((json) => {
			console.log(json);
			setGalleryItems((prevState) => ({ ...prevState, json }));
		});
	}
	console.log(setGalleryItems);
	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm
				itemName={galleryItems.image_id}
				title={galleryItems.artist_title}
				onSearchSubmit={onSearchSubmit}
			/>
			<ImageDetailsPage />
			<Footer />
		</div>
	);
}
