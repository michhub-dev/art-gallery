import './App.css';
import { ImageDetailsPage } from './ImageDetailsPage';
import { ArtList } from './ArtList';
import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { useState } from 'react';

export function App() {
	const [galleryItems, setGalleryItems] = useState(null);
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js
		searchArtworks(query).then((json) => {
			setData(json.data);
			setIsLoading(false);
		});
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{!galleryItems && <SearchForm onSearchSubmit={onSearchSubmit} />}
			{data && !galleryItems && (
				<ArtList
					data={data}
					setGalleryItems={setGalleryItems}
					isLoading={isLoading}
				/>
			)}
			{galleryItems && (
				<ImageDetailsPage
					setGalleryItems={setGalleryItems}
					IMAGE_ID={galleryItems.image_id}
				/>
			)}
			<Footer />
		</div>
	);
}
