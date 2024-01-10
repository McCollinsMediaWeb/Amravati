import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";
export default function ContactRow1(props) {
  
  return (
    <>
      <section className="pd-common bg5">
        <div className="container">
          <div className="text-center">
            <div className="Ct11 hfont" >
              Let’s Get in Touch
            </div>
            <div className="Ct22" >
              We are always available to assist you with any queries you may
              have.
            </div>
          </div>
          <div className="ContactItemBoxes">
            <div className="row">
              <div className="col-md-3">
                <div className="cItem"  >
                  <div className="cItemHd text-uppercase secondaryColor">
                    WhatsApp Us
                  </div>
                  <div className="cItemCntWrpH">
                    <div className="cItemCntWrp">
                      <a href="#">
                        <div className="cItemCnt">
                          <div className="cItemCntL">
                            <span className="Cicon whatsapp">&nbsp;</span>
                          </div>
                          <div className="cItemCntR transition1 sfont">
                            +971-525995503
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="cItem"  >
                  <div className="cItemHd text-uppercase secondaryColor">
                    Call Us
                  </div>
                  <div className="cItemCntWrpH">
                    <div className="cItemCntWrp">
                      <a href="#">
                        <div className="cItemCnt">
                          <div className="cItemCntL">
                            <span className="Cicon call">&nbsp;</span>
                          </div>
                          <div className="cItemCntR transition1 sfont">
                            +971-525995503
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="cItem"  >
                  <div className="cItemHd text-uppercase secondaryColor">
                    Email Us
                  </div>
                  <div className="cItemCntWrpH">
                    <div className="cItemCntWrp">
                      <a href="#">
                        <div className="cItemCnt">
                          <div className="cItemCntL">
                            <span className="Cicon email">&nbsp;</span>
                          </div>
                          <div className="cItemCntR transition1">
                            ijas@mccollinsmedia.com
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="cItem"  >
                  <div className="cItemHd text-uppercase secondaryColor">
                    Visit Us
                  </div>
                  <div className="cItemCntWrpH">
                    <div className="cItemCntWrp">
                      <a href="#">
                        <div className="cItemCnt">
                          <div className="cItemCntL">
                            <span className="Cicon location">&nbsp;</span>
                          </div>
                          <div className="cItemCntR transition1">
                            Amravathi Hotel
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
