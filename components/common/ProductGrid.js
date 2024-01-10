import Image from "next/image";
import Link from "next/link";

import React,{useEffect} from "react";
export default function (props) {
 
  return (
    <>
      <div>
        <div className="ProductGrid" >
          <div className="ProductGridImage">
            <Image
              src={props.imageSrc}
              layout="responsive"
              width={"257"}
              height={"358"}
              className="ProductImage"
            />
          </div>
          <div className="ProductGridTop">
            <div className="row">
              <div className="col-md-9">
                <div className="ReviewRow">
                  <div className="ReviewColumn gold">&nbsp;</div>
                  <div className="ReviewColumn gold">&nbsp;</div>
                  <div className="ReviewColumn gold">&nbsp;</div>
                  <div className="ReviewColumn gold">&nbsp;</div>
                  <div className="ReviewColumn">&nbsp;</div>
                </div>
              </div>
              <div className="col-md-3 text-right">
                <div className="LikeBtn">&nbsp;</div>
              </div>
            </div>
          </div>
          <div className="ProductGridBottom">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="GbT1">{props.menuTitle}</div>
                <div className="GbT2">AED <span className="sfont">{props.menuPrice}</span></div>
              </div>
              <div className="col-md-5">
                <a href="javascript:void(0)" className="ProductGridLnk">Order Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
