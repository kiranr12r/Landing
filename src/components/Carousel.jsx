import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="container mx-auto py-10">
            <Slider {...settings}>
                <div className="flex justify-center items-center">
                    <img
                        src="https://tse4.mm.bing.net/th?id=OIP.aGtjn0VnVjtih8h7vZdffAHaE6&pid=Api&P=0&h=180"
                        alt="Slide 1"
                        className="rounded-lg shadow-lg w-full h-60 object-cover"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <img
                        src="https://tse1.mm.bing.net/th?id=OIP.fhIevvNW1p6L4ntIpAJQ1wHaFj&pid=Api&P=0&h=180"
                        alt="Slide 2"
                        className="rounded-lg shadow-lg w-full h-60 object-cover"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <img
                        src="https://tse3.mm.bing.net/th?id=OIP.8XFCvu7JoXZ-R1Peg3oSwwHaFj&pid=Api&P=0&h=180"
                        alt="Slide 3"
                        className="rounded-lg shadow-lg w-full h-60 object-cover"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <img
                        src="https://tse1.mm.bing.net/th?id=OIP.quunXgXPEPMiX67mDTEQawHaFj&pid=Api&P=0&h=180"
                        alt="Slide 4"
                        className="rounded-lg shadow-lg w-full h-60 object-cover"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
