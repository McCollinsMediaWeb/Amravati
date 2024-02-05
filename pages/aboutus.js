import PageHeader from "@/components/common/PageHeader";
import InstaBlock from "@/components/home-components/InstaBlock";
import Testimonials from "@/components/home-components/Testimonials";
import AboutAMV from "@/components/about-components/aboutamv";
import OurVision from "@/components/about-components/OurVision";
import OurMission from "@/components/about-components/OurMission";
import HomeGallery from "@/components/home-components/HomeGallery";
import { useState, React, useRef, useEffect } from "react";
export default function aboutus() {
  const videoRef = useRef(null);
  return (
    <>
      
      <div>
        <PageHeader title="about us"/>
        <AboutAMV/>
        <HomeGallery/>
        <OurVision/>
        <div className="VideoSection pd-common bg5n">
          <div className="container">
            <video
              ref={videoRef}
              src="/mainbanner.mp4"
              width="100%"
              autoPlay
              muted
              loop
              playsInline
              poster="/hero.jpg"
              className="MainBannerVideo"
            />
          </div>
        </div>
        <HomeGallery/>
        <OurMission/>
        <Testimonials/>
        <InstaBlock/>
        
        </div>
    </>
  );
}
