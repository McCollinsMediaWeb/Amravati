import Image from "next/image";
import Link from "next/link";

import React, { useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
export default function OurCusines() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  
  return (
    <>
      <section className="pd-common pb-0">
        <div className="CusionWrap">
            <div className="container">
                <div className="CsnT1 text-center">Our Cuisines</div>
                <div className="CsnT2 text-center color-theme hfont">Dining</div>
                <div className="TabsWarp">
                    <div className="TabsItems">
                        <div className="TabsItem">North Indian</div>
                        <div className="TabsItem">South Indian</div>
                        <div className="TabsItem">Tandoor Se</div>
                        <div className="TabsItem">Chinese</div>
                        <div className="TabsItem">Continental</div>
                        <div className="TabsItem">Salads</div>
                        <div className="TabsItem">Season Special</div>
                    </div>
                </div>
                <div className="TabsContent">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="TabT1">
                                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</div>
                                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <Image
                      src="/c1.png"
                      layout="responsive"
                      height={"342"}
                      width={"528"}
                      priority={true}
                      className=""
                    />
                        </div>
                    </div>
                </div>
                <div className="CsnFooter">
                <Image
                      src="/c2.png"
                      layout="responsive"
                      height={"409"}
                      width={"1163"}
                      priority={true}
                      className=""
                    />
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
