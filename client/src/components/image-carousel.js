import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import heroImage1 from '../assets/images/pics/image-1.jpg';
import heroImage2 from '../assets/images/pics/image-2.jpg';
import heroImage3 from '../assets/images/pics/image-3.jpg';

const CarouselComponent = () => {
    return (
        <div>
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                className="carousel-container"
            >
                <div className="relative">
                    <img src={heroImage1} alt="Hero 1" className="carousel-image" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center">
                        <h3 className="text-white text-3xl ">Best School Awarded in Andaman and Nicobar Islands</h3>
                        <h2 className="text-white text-4xl font-bold">Horizon School</h2>
                        <button className="mt-4 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                            Know More
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <img src={heroImage2} alt="Hero 2" className="carousel-image" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center">
                        <h3 className="text-white text-3xl ">Best School Awarded in Andaman and Nicobar Islands</h3>
                        <h2 className="text-white text-4xl font-bold">Horizon School</h2>
                        <button className="mt-4 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                            Know More
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <img src={heroImage3} alt="Hero 3" className="carousel-image" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center">
                        <h3 className="text-white text-3xl ">Best School Awarded in Andaman and Nicobar Islands</h3>
                        <h2 className="text-white text-4xl font-bold">Horizon School</h2>
                        <button className="mt-4 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                            Know More
                        </button>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselComponent