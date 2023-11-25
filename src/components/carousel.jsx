import React, { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import "swiper/css";

register();

const Carousel = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // Add event listeners or manipulate Swiper instance here
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="3"
      navigation="true"
      pagination="true"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      {/* Add more <swiper-slide> as needed */}
    </swiper-container>
  );
};

export default Carousel;
