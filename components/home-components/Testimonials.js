import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      <section className="bg5 pd-common HomeGallery TestimonialBoxWrap">
        <div className="container">
          <div className="TestimonialHeader">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="RT2" >Food Lovers Feedback</div>
                <div className="RT3" >
                  <div className="StarItems">
                    <div className="StarItem">&nbsp;</div>
                    <div className="StarItem">&nbsp;</div>
                    <div className="StarItem">&nbsp;</div>
                    <div className="StarItem">&nbsp;</div>
                    <div className="StarItem">&nbsp;</div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="RT1" >
                  Words from Our Happy Customers: Discover the Delight of Dining
                  with Us! At Amaravathi our passion is not only to serve
                  exquisite dishes but to create unforgettable dining
                  experiences.
                </div>
              </div>
            </div>
          </div>
          <div
            className="GallerySlider1 TestimonilSlider"
           
          >
            <Slider {...settings}>
              <div>
                <div className="TestimonialItem">
                  <div className="ReviewItemBoxItem">
                    <div className="Rv1">Good pricees, yummy food and perfect</div>
                    <div className="Rv2">
                      “Good pricees, yummy food and perfect presentation of
                      dishes, also for shisha lovers it's good fruitful flavor.“
                    </div>
                    <div className="ReviewAddress">
                      <div className="Rname text-uppercase">Firas Altaweel</div>
                      <div className="RLocation text-uppercase">Dubai</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="TestimonialItem">
                  <div className="ReviewItemBoxItem">
                    <div className="Rv1">Good pricees, yummy food and perfect</div>
                    <div className="Rv2">
                      “Good pricees, yummy food and perfect presentation of
                      dishes, also for shisha lovers it's good fruitful flavor.“
                    </div>
                    <div className="ReviewAddress">
                      <div className="Rname text-uppercase">Firas Altaweel</div>
                      <div className="RLocation text-uppercase">Dubai</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="TestimonialItem">
                  <div className="ReviewItemBoxItem">
                    <div className="Rv1">Good pricees, yummy food and perfect</div>
                    <div className="Rv2">
                      “Good pricees, yummy food and perfect presentation of
                      dishes, also for shisha lovers it's good fruitful flavor.“
                    </div>
                    <div className="ReviewAddress">
                      <div className="Rname text-uppercase">Firas Altaweel</div>
                      <div className="RLocation text-uppercase">Dubai</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="TestimonialItem">
                  <div className="ReviewItemBoxItem">
                    <div className="Rv1">Good pricees, yummy food and perfect</div>
                    <div className="Rv2">
                      “Good pricees, yummy food and perfect presentation of
                      dishes, also for shisha lovers it's good fruitful flavor.“
                    </div>
                    <div className="ReviewAddress">
                      <div className="Rname text-uppercase">Firas Altaweel</div>
                      <div className="RLocation text-uppercase">Dubai</div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
