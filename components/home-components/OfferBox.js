import Image from "next/image";
import Link from "next/link";

import React, { useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
export default function OfferBox() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  
  return (
    <>
      <section>
        <div className="OfferImageBox">
         
          {isDesktop && (
           <Image
           src="/horo3.jpg"
           layout="responsive"
           height={"534"}
           width={"1440"}
           priority={true}
           className=""
         />
          )}
      {!isDesktop && (
          <Image
          src="/hk.jpg"
          layout="responsive"
          height={"790"}
          width={"720"}
          priority={true}
          className="MainBanner"
        />
      )}
          <div className="OfferBoxContent container">
            <div className="OfferTexts ">
              <div
                className="OfferT1"
                
              >
                Discount
              </div>
              <div
                className="OfferT2"
                
              >
                15% OFF
              </div>
              <div
                className="OfferT1"
                
              >
                On Dine in
              </div>
              <div >
                <a href="javascript:void(0)" className="OfferT3">
                    Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
