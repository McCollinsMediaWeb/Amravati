import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
export default function ContactRow1(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="pd-common bg3">
        <div className="container">
          <div className="text-center">
            <div className="Ct11" data-aos="fade-up" data-aos-duration="800">
              Let’s Get in Touch
            </div>
            <div className="Ct22" data-aos="fade-up" data-aos-duration="800">
              We are always available to assist you with any queries you may
              have.
            </div>
          </div>
          <div className="ContactItemBoxes">
            <div className="row">
              <div className="col-md-3">
                <div class="cItem"  data-aos="fade-left" data-aos-duration="800">
                  <div class="cItemHd text-uppercase secondaryColor">
                    WhatsApp Us
                  </div>
                  <div class="cItemCntWrpH">
                    <div class="cItemCntWrp">
                      <a href="#">
                        <div class="cItemCnt">
                          <div class="cItemCntL">
                            <span class="Cicon whatsapp">&nbsp;</span>
                          </div>
                          <div class="cItemCntR transition1">
                            +971-525995503
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="cItem"  data-aos="fade-up" data-aos-duration="800">
                  <div class="cItemHd text-uppercase secondaryColor">
                    Call Us
                  </div>
                  <div class="cItemCntWrpH">
                    <div class="cItemCntWrp">
                      <a href="#">
                        <div class="cItemCnt">
                          <div class="cItemCntL">
                            <span class="Cicon call">&nbsp;</span>
                          </div>
                          <div class="cItemCntR transition1">
                            +971-525995503
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="cItem"  data-aos="fade-up" data-aos-duration="800">
                  <div class="cItemHd text-uppercase secondaryColor">
                    Email Us
                  </div>
                  <div class="cItemCntWrpH">
                    <div class="cItemCntWrp">
                      <a href="#">
                        <div class="cItemCnt">
                          <div class="cItemCntL">
                            <span class="Cicon email">&nbsp;</span>
                          </div>
                          <div class="cItemCntR transition1">
                            ijas@mccollinsmedia.com
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="cItem"  data-aos="fade-right" data-aos-duration="800">
                  <div class="cItemHd text-uppercase secondaryColor">
                    Visit Us
                  </div>
                  <div class="cItemCntWrpH">
                    <div class="cItemCntWrp">
                      <a href="#">
                        <div class="cItemCnt">
                          <div class="cItemCntL">
                            <span class="Cicon location">&nbsp;</span>
                          </div>
                          <div class="cItemCntR transition1">
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
