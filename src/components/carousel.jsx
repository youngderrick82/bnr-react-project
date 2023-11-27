import React, { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import { Grid } from "@mui/material";
import "swiper/css";
import Slideshow1 from "../pages/assets/banner-images/merch-image.png";
import Slideshow2 from "../pages/assets/banner-images/merch-image2.png";
import Slideshow3 from "../pages/assets/banner-images/rbanner-image.png";
import Slideshow4 from "../pages/assets/banner-images/rbanner-image2.png";

const BannerCarousel = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    register();
    // Add any additional Swiper event listeners here if needed
  }, []);

  return (
        <swiper-container
          ref={swiperElRef}
          slides-per-view="1"
          loop="true"
          speed="500"
          navigation="true"
          pagination="true"
          autoplay={{delay: 1, disableOnInteraction: false}}
          className="banner-carousel"
        >
          <swiper-slide>
            <img src={Slideshow1} alt="Banner 1" />
          </swiper-slide>
          <swiper-slide>
            <img src={Slideshow2} alt="Banner 1" />
          </swiper-slide>
          <swiper-slide>
            <img src={Slideshow3} alt="Banner 1" />
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
