
import HeroBanner from "@/components/common/HeroBanner";
import PromotionalBlock from "@/components/home-components/Promotionalblock";
import MenuList from "@/components/home-components/MenuList";
import OfferBox from "@/components/home-components/OfferBox";
import HomeGallery from "@/components/home-components/HomeGallery";
import InstaBlock from "@/components/home-components/InstaBlock";
import Testimonials from "@/components/home-components/Testimonials";
import OurCusines from "@/components/home-components/OurCusines";
export default function Home() {
  return (
    <>
      
      <div>
        <HeroBanner/>
          <PromotionalBlock/>
          <OurCusines/>
        <OfferBox/>
        <MenuList/>
        
        <Testimonials/>
        <InstaBlock/>
        </div>
    </>
  );
}
