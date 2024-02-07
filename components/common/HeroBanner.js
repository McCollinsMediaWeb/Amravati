import Image from "next/image";
import Link from "next/link";

import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useEffect } from "react";
import Slider from "react-slick";
export default function HeroBanner() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true
  };
  return (
    <>
      <div>
        <div className="SliderImage">
          {isDesktop && (
            <Slider {...settings}>
              <div>
                <div className="position-relative">
                  <Image
                    src="/hero.jpg"
                    layout="responsive"
                    height={"790"}
                    width={"1440"}
                    priority={true}
                    className="MainBanner"
                  />
                </div>
              </div>
              <div>
                <div className="position-relative">
                  <Image
                    src="/hero1.jpg"
                    layout="responsive"
                    height={"790"}
                    width={"1440"}
                    priority={true}
                    className="MainBanner"
                  />
                </div>
              </div>
            </Slider>
          )}
          {!isDesktop && (
            <Slider {...settings}>
              <div>
                <div className="position-relative">
                  <Image
                    src="/heromobile.jpg"
                    layout="responsive"
                    height={"790"}
                    width={"720"}
                    priority={true}
                    className="MainBanner"
                  />
                </div>
              </div>
              <div>
                <div className="position-relative">
                  <Image
                    src="/heromobile1.jpg"
                    layout="responsive"
                    height={"790"}
                    width={"720"}
                    priority={true}
                    className="MainBanner"
                  />
                </div>
              </div>
            </Slider>
          )}
          <div className="SliderImageContent">
            <div className="ContentBox">
              <div className="HrT1 hfont">Taste Tradition,<br/> One Flavour at a Time</div>
              <div className="HrT2">
              Ready for More? Discover Our Full Menu Here
{" "}
              </div>
              <div className="ContentBoxButtons">
                <a href="#">Order Now</a>
                <Link href={"/menu"}>View Menu</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
