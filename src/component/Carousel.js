import React from 'react';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';//npm install --save-dev slick-carousel
import 'slick-carousel/slick/slick-theme.css';//npm install react-slick
import "./css/Carousel.css"


function Carousel(){

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='Carousel'>
      <Slider {...settings}>
          <div>
              <div className='CarouselBox'>
                  <img src="/img/CarouselImg01.jpg" alt="이미지_설명" />
              </div>
          </div>
          <div>
              <div className='CarouselBox'>
                  <img src="/img/CarouselImg02.jpg" alt="이미지_설명" />
              </div>
          </div>
          <div>
              <div className='CarouselBox'>
                  <img src="/img/CarouselImg03.jpg" alt="이미지_설명" />
              </div>
          </div>
          <div>
              <div className='CarouselBox'>
                  <img src="/img/CarouselImg04.jpg" alt="이미지_설명" />
              </div>
          </div>
          <div>
              <div className='CarouselBox'>
                  <img src="/img/CarouselImg05.jpg" alt="이미지_설명" />
              </div>
          </div>
      </Slider>
    </div>
  );
}

export default Carousel;