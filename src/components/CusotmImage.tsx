interface ICustomImageProps {
	imagePath: string;
}

export default function CustomImage({ imagePath }: ICustomImageProps) {
	return (
		<section className='w-full mx-auto'>
			<img src={imagePath} alt='image'/>
		</section>
	);
}