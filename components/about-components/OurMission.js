import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function OurMission() {
  const [open, setOpen] = useState(false);
  const settings = {
    dots: true,
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
      <section className="bg8 pd-common HomeGallery AbtContent1">
        <div className="container">
          <div className="DetBox1">
            <div className="row">
            <div className="col-md-5">
                <Image
                data-aos="fade-up"
                data-aos-duration="800"
                  src="/g2.jpg"
                  layout="responsive"
                  height={"401"}
                  width={"476"}
                  priority={true}
                  className=""
                />
              </div>
              <div className="col-md-7">
                <div
                  className="HmT1 hfont mrt10"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  Fueling Flavorful Experiences: <br />
                  Our Mission in Andhra Cuisine
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  We're on a mission to redefine your dining delight. Join us for an adventure where every bite tells a story of tradition and innovation.
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  Our goal is simple: serve up more than just meals, but unforgettable experiences that leave your taste buds craving for more.
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  We aim to be your go-to spot, not just a restaurant. Join us in our journey to make every flavour memorable, and every moment a celebration of our commitment to authentic Indian and Andhra cuisine. Let's savour the simplicity and richness of our mission together!
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
