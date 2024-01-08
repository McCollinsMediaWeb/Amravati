import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";
export default function PromotionalColumn(props) {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
      <div className="PromotionalGrid"  data-aos="fade-up" data-aos-duration="800">
                <Image
                  src={props.PrImage}
                  layout="responsive"
                  height={"319"}
                  width={"476"}
                  priority={true}
                  className=""
                />
                <div className="PromotionalBlockContent">
                    <div className="PbT1 text-uppercase">{props.PrTitle1} <br/>{props.PrTitle2}</div>
                    <div className="PbT2">{props.PrTitle3}</div>
                    <a href="#" className="color1">View Menu</a>
                </div>
              </div>
    </>
  );
}
