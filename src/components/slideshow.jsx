import React from "react";
import Slider from "react-slick";
import slideshow1 from "../pages/assets/banner-images/merch-image.png"
import slideshow2 from "../pages/assets/banner-images/merch-image2.png"
import slideshow3 from "../pages/assets/banner-images/rbanner-image.png"
import slideshow4 from "../pages/assets/banner-images/rbanner-image2.png"






export default function SlideShow() {

const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

return (

    <Slider {...settings}>
        <div>
            <img src={slideshow1} /> 
        </div>

        <div>
            <img src={slideshow2} /> 
        </div>

        <div>
            <img src={slideshow3} /> 
        </div>

        <div>
            <img src={slideshow4} /> 
        </div>
    </Slider>
)

}