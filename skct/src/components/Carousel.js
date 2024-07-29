import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1100,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideContent = [
    { image: "https://www.skct.edu.in/static/img/pic11.98b7a99.png" },
    { image: "https://www.skct.edu.in/static/img/pic12.d1105c9.png" },
    { image: "https://www.skct.edu.in/static/img/pic16.79ed0fe.png" },
    { image: "https://www.skct.edu.in/static/img/pic18.c596d21.png" },
    { image: "https://www.skct.edu.in/static/img/pic2.9cd2ca5.png" },
    { image: "https://www.skct.edu.in/static/img/pic17.6a29c33.png" },
    { image: "https://www.skct.edu.in/static/img/pic5.0acad05.png" },
    { image: "https://www.skct.edu.in/static/img/pic19.10d2534.png" },
    { image: "https://www.skct.edu.in/static/img/pic7.1926a54.png" },
    { image: "https://www.skct.edu.in/static/img/pic3.7918794.png" },
    { image: "https://www.skct.edu.in/static/img/pic5.0acad05.png" },
    { image: "https://www.skct.edu.in/static/img/pic13.155c89e.png" },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slideContent.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              style={{ width: '120px', height: '120px' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;