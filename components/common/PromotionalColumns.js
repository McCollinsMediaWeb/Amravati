import Image from "next/image";

import React,{useEffect} from "react";
export default function PromotionalColumn(props) {
    
  return (
    <>
      <div className="PromotionalGrid"  >
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
