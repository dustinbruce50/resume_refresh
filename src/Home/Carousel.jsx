import React from "react";
import Slider from "react-slick";
import slider from "react-slick";

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings} id="carousel">
      {images.map((image, index) => (
        <div key={index} className="carousel-item">
          <img src={image} alt={`Slide ${index + 1}`} id="carousel" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
