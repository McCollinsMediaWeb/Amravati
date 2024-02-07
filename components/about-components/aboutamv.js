import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function AboutAMV() {
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
                  Our Timeless Tale of <br/>Taste and Tradition
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  Join on a journey through the pages of our rich history, where each chapter takes you through the essence of our culinary legacy. 
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                 Discover the roots, the traditions, and the passion that have shaped our story into a tapestry of authentic Andhra and Indian flavours. Visit us to enter a true authentic Andhra kitchen and to taste some of the spiciest and dreamiest dishes one may find there. 
                </div>
                <div
                  className="HmT2"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                   This is who we are – a celebration of heritage, taste, and the art of creating lasting memories. Welcome to the history of our story, where every dish tells a tale, and every dining experience is a chapter waiting to be explored.
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
