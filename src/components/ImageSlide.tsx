import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = Array.from({ length: 11 }, (_, i) => {
	const index = i + 1;
	return {
		original: `/samples/${index}.jpg`,
		thumbnail: `/samples/${index}t.jpg`,
	};
});

export default function ImageSlide() {
	return (
		<ImageGallery
			autoPlay
			showPlayButton={false}
			showFullscreenButton={false}
			items={images}
		/>
	);
}