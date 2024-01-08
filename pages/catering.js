
import PageHeader from "@/components/common/PageHeader";
import CateringForm from "@/components/common/ReservationForm";
import InstaBlock from "@/components/home-components/InstaBlock";
import Testimonials from "@/components/home-components/Testimonials";
export default function catering() {
  return (
    <>
      
      <div>
      <PageHeader title="Book Catering"/>
      <CateringForm/>
      <Testimonials/>
      <InstaBlock/>
        </div>
    </>
  );
}
