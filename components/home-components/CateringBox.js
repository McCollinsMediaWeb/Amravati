import Image from "next/image";
import Link from "next/link";

import React, { useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
export default function CateringBox() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  
  return (
    <>
      <section className="pd-common bgnew5">
        <div className="CateringWrap">
            <div className="container">
                <div className="CsnT2 text-center color-theme hfont">Catering</div>
                <div className="CsnT3 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                <div className="CateringContent">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="CateringAreas">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="CateringArea">
                              <div className="CateringAreaIcon one">&nbsp;</div>
                              <div className="CateringAreaTxt">Wedding</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="CateringArea">
                              <div className="CateringAreaIcon two">&nbsp;</div>
                              <div className="CateringAreaTxt">Corporates</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="CateringArea">
                              <div className="CateringAreaIcon three">&nbsp;</div>
                              <div className="CateringAreaTxt">Chaat Counter</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="CateringArea">
                              <div className="CateringAreaIcon four">&nbsp;</div>
                              <div className="CateringAreaTxt">Parties</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="CateringArea">
                              <div className="CateringAreaIcon five">&nbsp;</div>
                              <div className="CateringAreaTxt">Launch Boxes</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="CateringArea">
                              <div className="CateringAreaIcon six">&nbsp;</div>
                              <div className="CateringAreaTxt">Live Stations</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                    <Image
                      src="/c3.png"
                      layout="responsive"
                      height={"318"}
                      width={"469"}
                      priority={true}
                      className=""
                    />
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
