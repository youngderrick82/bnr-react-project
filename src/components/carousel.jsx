import React, { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import { Grid } from "@mui/material";
import "swiper/css/bundle";
import Slideshow1 from "../pages/assets/banner-images/group-photo-transformed.jpeg";
import Slideshow2 from "../pages/assets/banner-images/Experience the Saga top.png";
import Slideshow3 from "../pages/assets/banner-images/interview-photo.png";
import Slideshow4 from "../pages/assets/banner-images/Merch Coming Sooon.png";

const BannerCarousel = () => {
  const swiperElRef = useRef(null);
  const ap = {
    delay: 1,
    disableOnInteraction: false
  }

  useEffect(() => {
    register();
    // Add any additional Swiper event listeners here if needed
  }, []);

  return (
        <swiper-container
          ref={swiperElRef}
          slides-per-view="1"
          loop="true"
          speed="400"
          navigation="true"
          pagination="true"
          autoplay={ap}
          className="banner-carousel"
        >
          <swiper-slide>
            <img src={Slideshow1} width="100%" height="100%" alt="Group Spider-Man Cosplay" />
          </swiper-slide>
          <swiper-slide>
            <img src={Slideshow2} width="100%" height="100%" alt="Experience the Sage: Live the Anime Revolution with Black Nerd Rises" />
          </swiper-slide>
          <swiper-slide>
            <img src={Slideshow3} width="100%" height="100%" alt="Dark Skywalker interviewing con-goer" />
          </swiper-slide>
          <swiper-slide>
            <img src={Slideshow4} width="100%" height="100%" alt="Get Ready: Exclusive Merch Launching Soon!" />
          </swiper-slide>
          {/* Add more <swiper-slide> elements for additional banners */}
        </swiper-container>
  );
};

export default BannerCarousel;

/* import React, { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import "swiper/css";



const Carousel = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      console.log('slide changed');
    });

    register();
  }, []);

  return (
    <swiper-container
      className="swiper-container"
      ref={swiperElRef}
      slides-per-view="2"
      loop="true"
      speed="200"
      navigation="true"
      pagination="true"
    >
      <swiper-slide>test</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
  );
};

export default Carousel;
 */
