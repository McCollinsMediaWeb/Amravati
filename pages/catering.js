
import PageHeader from "@/components/common/PageHeader";
import CateringForm from "@/components/common/ReservationForm";
import InstaBlock from "@/components/home-components/InstaBlock";
import Testimonials from "@/components/home-components/Testimonials";
import MenuList from "@/components/home-components/MenuList";
import HomeGallery from "@/components/home-components/HomeGallery";
export default function catering() {
  return (
    <>
      
      <div>
      <PageHeader title="Book Catering"/>
      <CateringForm/>
      
      <HomeGallery/>
      <MenuList/>
      <InstaBlock/>
        </div>
    </>
  );
}

