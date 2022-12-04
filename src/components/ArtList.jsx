export function ArtList({ data, setGalleryItems, isLoading }) {
	return (
		<>
			<ul>
				{isLoading
					? 'Loading...'
					: data.map((artItem) => (
							<li key={artItem.id}>
								<button onClick={() => setGalleryItems(artItem)}>
									{artItem.title} -
									<small>Authored by: - {artItem.artist_title}</small>
								</button>
							</li>
					  ))}
			</ul>
		</>
	);
}
