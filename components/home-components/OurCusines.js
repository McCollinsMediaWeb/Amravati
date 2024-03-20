import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
export default function OurCusines() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [toggleState, toggleTab] = useState(1);
  
  return (
    <>
      <section className="pd-common pb-0">
        <div className="CusionWrap">
            <div className="container">
                <div className="CsnT1 text-center">Discover Our</div>
                <div className="CsnT2 text-center color-theme hfont">Menu</div>
                <div className="TabsWarp">
                    <div className="TabsItems">
                        <div className={toggleState === 1 ? 'TabsItem active-tabs' : 'TabsItem'} onClick={() => toggleTab(1)}>Soups</div>
                        <div className={toggleState === 2 ? 'TabsItem active-tabs' : 'TabsItem'} onClick={() => toggleTab(2)}>Appetizers</div>
                        <div className={toggleState === 3 ? 'TabsItem active-tabs' : 'TabsItem'} onClick={() => toggleTab(3)}>Thali</div>
                        <div className={toggleState === 4 ? 'TabsItem active-tabs' : 'TabsItem'} onClick={() => toggleTab(4)}>Biriyani / Pulavu</div>
                        <div  className={toggleState === 5 ? 'TabsItem active-tabs' : 'TabsItem'} onClick={() => toggleTab(5)}>Main Course</div>
                        <div  className={toggleState === 6 ? 'TabsItem active-tabs' : 'TabsItem'} onClick={() => toggleTab(6)}>Chinese</div>
                        <div  className={toggleState === 7 ? 'TabsItem active-tabs' : 'TabsItem'} onClick={() => toggleTab(7)}>Bread Basket</div>
                        <div  className={toggleState === 8 ? 'TabsItem active-tabs' : 'TabsItem'} onClick={() => toggleTab(8)}>Beverages</div>
                        <div  className={toggleState === 9 ? 'TabsItem active-tabs' : 'TabsItem'} onClick={() => toggleTab(9)}>Juices</div>
                        <div  className={toggleState === 10 ? 'TabsItem active-tabs' : 'TabsItem'} onClick={() => toggleTab(10)}>Shakes</div>
                        <div  className={toggleState === 11 ? 'TabsItem active-tabs' : 'TabsItem'} onClick={() => toggleTab(11)}>Desserts</div>
                    </div>
                </div>
                <div className="TabsContent">
                    {toggleState === 1 &&
                        <div className="row">
                            <div className="col-md-6">
                                <div className="TabT1">
                                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</div>
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
                    }
                    {toggleState === 2 &&
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
                          src="/cc6.jpg"
                          layout="responsive"
                          height={"342"}
                          width={"528"}
                          priority={true}
                          className=""
                        />
                            </div>
                        </div>
                    }
                    {toggleState === 3 &&
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
                          src="/cc5.jpg"
                          layout="responsive"
                          height={"342"}
                          width={"528"}
                          priority={true}
                          className=""
                        />
                            </div>
                        </div>
                    }
                    {toggleState === 4 &&
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
                          src="/cc4.jpg"
                          layout="responsive"
                          height={"342"}
                          width={"528"}
                          priority={true}
                          className=""
                        />
                            </div>
                        </div>
                    }
                    {toggleState === 5 &&
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
                          src="/cc3.jpg"
                          layout="responsive"
                          height={"342"}
                          width={"528"}
                          priority={true}
                          className=""
                        />
                            </div>
                        </div>
                    }
                    {toggleState === 6 &&
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
                          src="/cc2.jpg"
                          layout="responsive"
                          height={"342"}
                          width={"528"}
                          priority={true}
                          className=""
                        />
                            </div>
                        </div>
                    }
                    {toggleState === 7 &&
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
                          src="/cc1.jpg"
                          layout="responsive"
                          height={"342"}
                          width={"528"}
                          priority={true}
                          className=""
                        />
                            </div>
                        </div>
                    }
                    {toggleState === 8 &&
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
                          src="/cc2.jpg"
                          layout="responsive"
                          height={"342"}
                          width={"528"}
                          priority={true}
                          className=""
                        />
                            </div>
                        </div>
                    }
                    {toggleState === 9 &&
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
                          src="/cc3.jpg"
                          layout="responsive"
                          height={"342"}
                          width={"528"}
                          priority={true}
                          className=""
                        />
                            </div>
                        </div>
                    }
                    {toggleState === 10 &&
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
                          src="/cc4.jpg"
                          layout="responsive"
                          height={"342"}
                          width={"528"}
                          priority={true}
                          className=""
                        />
                            </div>
                        </div>
                    }
                    {toggleState === 11 &&
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
                          src="/cc5.jpg"
                          layout="responsive"
                          height={"342"}
                          width={"528"}
                          priority={true}
                          className=""
                        />
                            </div>
                        </div>
                    }
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
