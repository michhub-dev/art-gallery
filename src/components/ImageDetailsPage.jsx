export function ImageDetailsPage({ IMAGE_ID, setGalleryItems }) {
	const styles = {
		width: '350px',
		height: '300px',
	};
	return (
		<>
			<div>
				<button onClick={() => setGalleryItems(null)}>go back</button>
				<img
					alt="art"
					src={`https://www.artic.edu/iiif/2/${IMAGE_ID}/full/843,/0/default.jpg`}
					style={styles}
				/>
			</div>
		</>
	);
}
