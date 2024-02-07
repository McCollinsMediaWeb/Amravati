import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function OurVision() {
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
              <div className="col-md-7">
                <div
                  className="HmT1 hfont"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  Envisioning Culinary <br />
                  Excellence

                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  On our journey forward, we envision a culinary realm where tradition and innovation dance in harmony. 
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                 Picture an immersive experience where authentic Indian and Andhra flavours take centre stage, inviting you to explore the depths of our culinary and cultural heritage.
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  Our vision extends beyond exquisite dishes; it's about creating moments, stories, and a legacy of taste that transcends time. Join us as we aspire to be the provides of authentic, heart warming dishes that evoke nostalgia into its tasters. Welcome to our vision, where the future of dining is a seamless fusion of tradition, innovation, and an unwavering commitment to creating memorable experiences. Together, let's savour the journey ahead.
                </div>
              </div>
              <div className="col-md-5">
                <Image
                data-aos="fade-up"
                data-aos-duration="800"
                  src="/g1.jpg"
                  layout="responsive"
                  height={"401"}
                  width={"476"}
                  priority={true}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
