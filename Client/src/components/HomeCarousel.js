import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeCarousel = () => {
	return (
		<div>
			<Carousel autoPlay={true} interval={5000} indicators={false}>
				<Carousel.Item>
					<img
						className="d-block md:h-80 h-40 w-screen"
						src="http://pstu.ac.bd/images/slider/1532949393.jpg"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block md:h-80 h-40 w-screen"
						src="http://pstu.ac.bd/images/slider/1579672427.jpg"
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block md:h-80 h-40 w-screen"
						src="http://pstu.ac.bd/images/slider/1532949376.jpg"
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
export default HomeCarousel;
