import Image from "next/image";
import Link from "next/link";


import React, { useEffect , useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function HomeGallery() {
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
      <section className="bg66 pd-common HomeGallery">
        <div className="container">
          <div
            className="HmT1 text-center hfont"
            
          >
            The Amaravathi Difference,  <br />
            Experience Fine Real Traditional Dining
          </div>
          <div
            className="HmT2 text-center"
            
          >
           At Amaravathi, we redefine the art of fine dining through a lens of traditional and authentic experiences. We set the table allowing you to immerse yourself in the refined elegance of our culinary offerings, where every dish is a homage to the authentic flavours that have been the staples of every Andhra household for generations.
          </div>
          <div className="GallerySlider1" >
            <Slider {...settings}>
              <div>
                <div className="GelleryItem" onClick={() => setOpen(true)}>
                  <Image
                    src="/gg1.jpg"
                    layout="responsive"
                    height={"401"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                </div>
              </div>
              <div>
                <div className="GelleryItem" onClick={() => setOpen(true)}>
                  <Image
                    src="/ggg1.jpg"
                    layout="responsive"
                    height={"401"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                </div>
              </div>
              <div>
                <div className="GelleryItem" onClick={() => setOpen(true)}>
                  <Image
                    src="/ggg2.jpg"
                    layout="responsive"
                    height={"401"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                </div>
              </div>
              <div>
                <div className="GelleryItem" onClick={() => setOpen(true)}>
                  <Image
                    src="/ggg3.jpg"
                    layout="responsive"
                    height={"401"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                </div>
              </div>
              <div>
                <div className="GelleryItem" onClick={() => setOpen(true)}>
                  <Image
                    src="/gg1.jpg"
                    layout="responsive"
                    height={"401"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                </div>
              </div>
              <div>
                <div className="GelleryItem" onClick={() => setOpen(true)}>
                  <Image
                    src="/gg3.jpg"
                    layout="responsive"
                    height={"401"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                </div>
              </div>
            </Slider>
            <Lightbox
          open={open}
          close={() => setOpen(false)}
          plugins={[Thumbnails]}
          slides={[
            { src: "/gg1.jpg" },
            { src: "/gg2.jpg" },
            { src: "/gg3.jpg" },
            { src: "/gg4.jpg" },
            { src: "/gg2.jpg" },
            { src: "/gg3.jpg" },
            { src: "/gg1.jpg" },
            { src: "/gg2.jpg" },
            { src: "/gg3.jpg" },
            
          ]}
        />
          </div>
        </div>
      </section>
    </>
  );
}
