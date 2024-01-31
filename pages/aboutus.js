import PageHeader from "@/components/common/PageHeader";
import InstaBlock from "@/components/home-components/InstaBlock";
import Testimonials from "@/components/home-components/Testimonials";
import AboutAMV from "@/components/about-components/aboutamv";
import OurVision from "@/components/about-components/OurVision";
import OurMission from "@/components/about-components/OurMission";
import HomeGallery from "@/components/home-components/HomeGallery";
export default function aboutus() {
  return (
    <>
      
      <div>
        <PageHeader title="about us"/>
        <AboutAMV/>
        <HomeGallery/>
        <OurVision/>
        <HomeGallery/>
        <OurMission/>
        <Testimonials/>
        <InstaBlock/>
        
        </div>
    </>
  );
}
