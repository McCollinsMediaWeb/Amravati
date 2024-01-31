import Image from "next/image";
import Slider from "react-slick";
import React, { useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
export default function PromotionalBlock() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const settings = {
    dots: false,
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
      <section className="bgnew2 promotionalBlock pd-common">
        <div className="container">
        {isDesktop && (
          <div className="GallerySlider1">
            <Slider {...settings}>
              <div className="ProMColumnBox">
                <div className="PromotionalGrid">
                  <Image
                    src="/p1.jpg"
                    layout="responsive"
                    height={"319"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                  <div className="PromotionalBlockContent">
                    <div className="PbT1 hfont">
                      Offers <br />
                      25% OFF
                    </div>
                    <div className="PbT2">ON FIRST PURCHASE</div>
                    <a href="#" className="color1">
                      View Menu
                    </a>
                  </div>
                </div>
              </div>
              <div className="ProMColumnBox">
                <div className="PromotionalGrid">
                  <Image
                    src="/p5.jpg"
                    layout="responsive"
                    height={"319"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                  <div className="PromotionalBlockContent">
                    <div className="PbT1 hfont">
                      Weekend
                      <br />
                      Special
                    </div>
                    <div className="PbT2">ON FIRST PURCHASE</div>
                    <a href="#" className="color2">
                      View Menu
                    </a>
                  </div>
                </div>
              </div>
              <div className="ProMColumnBox">
                <div className="PromotionalGrid">
                  <Image
                    src="/p3.jpg"
                    layout="responsive"
                    height={"319"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                  <div className="PromotionalBlockContent">
                    <div className="PbT1 hfont">
                      Sea Food
                      <br />
                      Special
                    </div>
                    <div className="PbT2">
                      <span className="sfont">20%</span> Offers
                    </div>
                    <a href="#" className="color3">
                      View Menu
                    </a>
                  </div>
                </div>
              </div>
              <div className="ProMColumnBox">
                <div className="PromotionalGrid">
                  <Image
                    src="/p1.jpg"
                    layout="responsive"
                    height={"319"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                  <div className="PromotionalBlockContent">
                    <div className="PbT1 hfont">
                      Offers <br />
                      25% OFF
                    </div>
                    <div className="PbT2">ON FIRST PURCHASE</div>
                    <a href="#" className="color1">
                      View Menu
                    </a>
                  </div>
                </div>
              </div>
              <div className="ProMColumnBox">
                <div className="PromotionalGrid">
                  <Image
                    src="/p5.jpg"
                    layout="responsive"
                    height={"319"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                  <div className="PromotionalBlockContent">
                    <div className="PbT1 hfont">
                      Weekend
                      <br />
                      Special
                    </div>
                    <div className="PbT2">ON FIRST PURCHASE</div>
                    <a href="#" className="color2">
                      View Menu
                    </a>
                  </div>
                </div>
              </div>
              <div className="ProMColumnBox">
                <div className="PromotionalGrid">
                  <Image
                    src="/p3.jpg"
                    layout="responsive"
                    height={"319"}
                    width={"476"}
                    priority={true}
                    className=""
                  />
                  <div className="PromotionalBlockContent">
                    <div className="PbT1 hfont">
                      Sea Food
                      <br />
                      Special
                    </div>
                    <div className="PbT2">
                      <span className="sfont">20%</span> Offers
                    </div>
                    <a href="#" className="color3">
                      View Menu
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
)}
{!isDesktop && (
          <div className="row">
            <div className="col-md-4">
              <div className="PromotionalGrid">
                <Image
                  src="/p1.jpg"
                  layout="responsive"
                  height={"319"}
                  width={"476"}
                  priority={true}
                  className=""
                />
                <div className="PromotionalBlockContent">
                  <div className="PbT1 hfont">
                    Offers <br />
                    25% OFF
                  </div>
                  <div className="PbT2">ON FIRST PURCHASE</div>
                  <a href="#" className="color1">
                    View Menu
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="PromotionalGrid">
                <Image
                  src="/p2.jpg"
                  layout="responsive"
                  height={"319"}
                  width={"476"}
                  priority={true}
                  className=""
                />
                <div className="PromotionalBlockContent">
                  <div className="PbT1 hfont">
                    Weekend
                    <br />
                    Special
                  </div>
                  <div className="PbT2">ON FIRST PURCHASE</div>
                  <a href="#" className="color2">
                    View Menu
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="PromotionalGrid">
                <Image
                  src="/p3.jpg"
                  layout="responsive"
                  height={"319"}
                  width={"476"}
                  priority={true}
                  className=""
                />
                <div className="PromotionalBlockContent">
                  <div className="PbT1 hfont">
                    Sea Food
                    <br />
                    Special
                  </div>
                  <div className="PbT2">
                    <span className="sfont">20%</span> Offers
                  </div>
                  <a href="#" className="color3">
                    View Menu
                  </a>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </section>
    </>
  );
}
