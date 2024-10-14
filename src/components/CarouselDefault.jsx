import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
// Import images from your assets folder
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';
import image4 from '../assets/img4.jpg';
import image5 from '../assets/img5.jpg';
import image6 from '../assets/img6.jpg';
import image7 from '../assets/img7.jpg';
import image8 from '../assets/img8.jpg';
import image9 from '../assets/img9.jpg';

export function CarouselDefault() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length / 3));
        }, 3000); // Change to 2000 for 2 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    // Calculate the displayed images
    const displayedImages = images.slice(activeIndex * 3, activeIndex * 3 + 3);

    return (
        <Carousel
            className="rounded-xl mb-8"
            navigation={({ length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(Math.ceil(images.length / 3)).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            {displayedImages.map((src, index) => (
                <div className="relative h-72 w-full flex justify-center" key={index}>
                    <img
                        src={src}
                        alt={`image ${activeIndex * 3 + index + 1}`}
                        className="h-full w-full object-cover mx-2 rounded-lg" // Add rounded corners and margins
                    />
                </div>
            ))}
        </Carousel>
    );
}
