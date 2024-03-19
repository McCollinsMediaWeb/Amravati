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
           src="/horo4.jpg"
           layout="responsive"
           height={"534"}
           width={"1440"}
           priority={true}
           className=""
         />
          )}
      {!isDesktop && (
          <Image
          src="/hk1.jpg"
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
                Ramadan Menu
              </div>
              <div
                className="OfferT2 hfont"
                
              >
                15% OFF
              </div>
              <div
                className="OfferT1"
                
              >
                On Dine in
              </div>
              <div >
                <Link href="ifthar-menu.pdf" className="OfferT3" target="_blank">
                   View Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
