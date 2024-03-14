

import React, { useEffect } from "react";
import Slider from "react-slick";
import ProductGrid from "../common/ProductGrid";
export default function MenuList() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
    ],
  };
  
  return (
    <>
      <section className="bgnew6 MenuList pd-common">
        <div className="container">
          <div
            className="T1 text-center hfont  color-theme"
            
          >
            Discover the Jewels of Andhra flavours
          </div>
          <div
            className="T2 text-center"
            
          >
            Yearning for the authenticity of Andhra's culinary wonders? Amaravathi emerges as your ultimate destination for an artful plate of flavours. Immerse yourself in the irresistible allure of our spicy biryanis, captivating your senses with every aromatic bite. From the velvety richness of our mutton kurumas that beckon to be savoured, our best sellers have already captivated countless hearts.This is your opportunity to experience some of the town's most delectable delights.
          </div>
          <div className="slider1">
            <Slider {...settings}>
                <div>
                    <ProductGrid imageSrc="/m1.jpg" menuTitle="Chicken Biriyani" menuPrice="150"/>
                </div>
                <div>
                    <ProductGrid imageSrc="/m2.jpg" menuTitle="Mutton Kuruma" menuPrice="80"/>
                </div>
                <div>
                    <ProductGrid imageSrc="/m3.jpg" menuTitle="Butter Chicken" menuPrice="70"/>
                </div>
                <div>
                    <ProductGrid imageSrc="/m4.jpg" menuTitle="Chana Masala" menuPrice="50"/>
                </div>
                <div>
                    <ProductGrid imageSrc="/m1.jpg" menuTitle="Chicken Biriyani" menuPrice="55"/>
                </div>
                <div>
                    <ProductGrid imageSrc="/m2.jpg" menuTitle="Fried Rice" menuPrice="69"/>
                </div>
            </Slider>
          </div>
          <div className="MobCenter">
            <a href="javascript:void(0);" className="Slider1Link">Explore More</a>
          </div>
        </div>
      </section>
    </>
  );
}
