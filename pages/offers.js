import PageHeader from "@/components/common/PageHeader";
import PromotionalColumn from "@/components/common/PromotionalColumns";
import HomeGallery from "@/components/home-components/HomeGallery";
import InstaBlock from "@/components/home-components/InstaBlock";
import Testimonials from "@/components/home-components/Testimonials";
export default function offers() {
  return (
    <>
      <div>
        <PageHeader title="Latest Offers" />
        <div className="PromotionalGrids pd-common bg5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <PromotionalColumn PrImage="/p1.jpg" PrTitle1="Offers" PrTitle2="25% OFF" PrTitle3="ON FIRST PURCHASE" />
              </div>
              <div className="col-md-4">
                <PromotionalColumn PrImage="/p2.jpg" PrTitle1="Weekend" PrTitle2="Special" PrTitle3="ON FIRST PURCHASE" />
              </div>
              <div className="col-md-4">
                <PromotionalColumn PrImage="/p3.jpg" PrTitle1="Sea Food" PrTitle2="25% OFF" PrTitle3="ON FIRST PURCHASE" />
              </div>
              <div className="col-md-4">
                <PromotionalColumn PrImage="/p2.jpg" PrTitle1="Weekend" PrTitle2="Special" PrTitle3="ON FIRST PURCHASE" />
              </div>
              <div className="col-md-4">
                <PromotionalColumn PrImage="/p3.jpg" PrTitle1="Sea Food" PrTitle2="25% OFF" PrTitle3="ON FIRST PURCHASE" />
              </div>
              <div className="col-md-4">
                <PromotionalColumn PrImage="/p1.jpg" PrTitle1="Offers" PrTitle2="25% OFF" PrTitle3="ON FIRST PURCHASE" />
              </div>
              <div className="col-md-4">
                <PromotionalColumn PrImage="/p2.jpg" PrTitle1="Weekend" PrTitle2="Special" PrTitle3="ON FIRST PURCHASE" />
              </div>
              <div className="col-md-4">
                <PromotionalColumn PrImage="/p3.jpg" PrTitle1="Sea Food" PrTitle2="25% OFF" PrTitle3="ON FIRST PURCHASE" />
              </div>
              <div className="col-md-4">
                <PromotionalColumn PrImage="/p2.jpg" PrTitle1="Weekend" PrTitle2="Special" PrTitle3="ON FIRST PURCHASE" />
              </div>
              <div className="col-md-4">
                <PromotionalColumn PrImage="/p3.jpg" PrTitle1="Sea Food" PrTitle2="25% OFF" PrTitle3="ON FIRST PURCHASE" />
              </div>
              <div className="col-md-4">
                <PromotionalColumn PrImage="/p1.jpg" PrTitle1="Offers" PrTitle2="25% OFF" PrTitle3="ON FIRST PURCHASE" />
              </div>
              <div className="col-md-4">
                <PromotionalColumn PrImage="/p2.jpg" PrTitle1="Weekend" PrTitle2="Special" PrTitle3="ON FIRST PURCHASE" />
              </div>
            </div>
          </div>
        </div>
        <HomeGallery/>
        <Testimonials/>
        <InstaBlock/>
      </div>
    </>
  );
}
