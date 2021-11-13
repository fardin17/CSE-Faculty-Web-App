import { Carousel } from 'react-carousel-minimal';
function ImageCarousel() {
	const data = [
		{
			image: 'http://pstu.ac.bd/images/faculties/cse.jpg',
			caption: 'CSE Building',
		},
		{
			image: 'http://pstu.ac.bd/cse/uploads/admin_uploads/cls13.JPG',
			caption: 'CSE Building',
		},
		{
			image:
				'http://pstu.ac.bd/cse/images/16487514_1346979582039249_7886773494461505188_o11.jpg',
			caption: 'Programming Contest',
		},
		{
			image: 'http://pstu.ac.bd/images/slider/1579672427.jpg',
			caption: 'Administration Building',
		},
		{
			image: 'http://pstu.ac.bd/images/slider/1532949393.jpg',
			caption: 'The Real Hero of Bangladesh',
		},
		{
			image: 'http://pstu.ac.bd/images/slider/1579427262.jpg',
			caption: 'Nil Komol',
		},
	];

	const captionStyle = {
		fontSize: '2em',
		fontWeight: 'bold',
	};
	const slideNumberStyle = {
		fontSize: '20px',
		fontWeight: 'bold',
	};
	return (
		<div className="App">
			<div style={{ textAlign: 'center' }}>
				<div>
					<Carousel
						data={data}
						time={5000}
						width="screen"
						height="400px"
						captionStyle={captionStyle}
						radius="10px"
						slideNumber={true}
						slideNumberStyle={slideNumberStyle}
						captionPosition="bottom"
						automatic={true}
						dots={true}
						pauseIconColor="white"
						pauseIconSize="40px"
						slideBackgroundColor="darkgrey"
						slideImageFit="cover"
						thumbnails={true}
						thumbnailWidth="100px"
						style={{
							textAlign: 'center',
							maxWidth: '850px',
							maxHeight: '500px',
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default ImageCarousel;
