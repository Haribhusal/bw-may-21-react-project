import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "./../data/sliders";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const HeroSlider = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="h-12 absolute top-1/2 -translate-y-1/2 z-30 right-10 w-12 bg-violet-500 rounded-full shadow-2xl text-white cursor-pointer flex justify-center items-center"
        onClick={onClick}
      >
        <AiOutlineRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="h-12 absolute top-1/2 -translate-y-1/2 left-10 w-12 z-30 bg-violet-500 rounded-full shadow-2xl text-white cursor-pointer flex justify-center items-center"
        onClick={onClick}
      >
        <AiOutlineLeft />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {sliderData.map((item) => (
          <div className="relative" key={item.id}>
            <img
              src={item.imageUrl}
              className="h-96 w-full object-cover"
              alt={item.title}
            />
            <h3 className="absolute text-center  bottom-0 left-0 text-white p-5 bg-violet-700/80 w-full">
              {item.title}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
