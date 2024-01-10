import Image from "next/image";
import Link from "next/link";

import useMediaQuery from "@/hooks/useMediaQuery";
import React,{useEffect} from "react";
export default function HeroBanner() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
 
  return (
    <>
      <div>
        <div className="SliderImage">
        {isDesktop && (
          <Image
            src="/hero.jpg"
            layout="fill"
            priority={true}
            className="MainBanner DImage"
          />
          )}
      {!isDesktop && (
          <Image
          src="/heromobile.jpg"
          layout="responsive"
          height={"790"}
          width={"720"}
          priority={true}
          className="MainBanner"
        />
      )}
          <div className="SliderImageContent">
            <div className="ContentBox">
              <div className="HrT1 hfont">A Celebration of Tradition</div>
              <div className="HrT2">
                Flavorsome spicy Chicken Biryani to enlighten your taste buds{" "}
              </div>
              <div className="ContentBoxButtons">
                <a href="#">Order Now</a>
                <Link href={"/offers"}>View Offers</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
