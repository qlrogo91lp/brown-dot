import ImageGallery, { type ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const samples = Array.from({ length: 11 }, (_, i) => {
	const index = i + 1;
	return {
		original: `/samples/${index}.jpg`,
		thumbnail: `/samples/${index}t.jpg`,
	};
});

interface ImageSlideProps {
	images?: ReactImageGalleryItem[];
	onThumbnail?: boolean;
}

export default function ImageSlide({ images, onThumbnail = false }: ImageSlideProps) {
	return (
		<ImageGallery
			autoPlay
			showPlayButton={false}
			showFullscreenButton={false}
			showThumbnails={onThumbnail}
			items={images ?? samples}
		/>
	);
}