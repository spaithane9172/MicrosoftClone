import React, { useRef, useState } from 'react'
import CarouselItem from './CarouselItem';
import slidimg1 from '../../img/himg.jpg'
import slidimg2 from '../../img/h1img.webp'
import Slider from 'react-slick';
import CarouselNavigation from './CarouselNavigation';

function Carousel() {
    const carouselData = [
        {
            img: slidimg2,
            title: "Microsoft 365",
            desc: "Turn your ideas into reality, stay safer online and off, and focus on what matters most with Microsoft 365 apps",
            bText: "For one person",
            ptext: true
        },
        {
            img: slidimg1,
            title: "Surface Pro 9",
            desc: "Tablet versatility and laptop power — all in one ultra-portable device",
            bText: "Learn more",
            ptext: false
        }];
    const [slideIndex, setIndex] = useState(0);
    

    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        afterChange: () => { if (slideIndex === 0) { setIndex(1) } else { setIndex(0) } }
    };
    const sliderRef = useRef();
    
    return (
        <>
            <Slider {...settings} ref={sliderRef} className='container mx-auto w-[98vw] flex overflow-hidden border-2 border-gray-100 h-[500px] shadow-md'>
                {carouselData.map((item) => {
                    return <CarouselItem key={item.title} item={item} />;
                })
                }
            </Slider>
            <CarouselNavigation sliderRef={sliderRef} slideIndex={slideIndex}/>
        </>

    )
}

export default Carousel
