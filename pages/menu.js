import PageHeader from "@/components/common/PageHeader";
import InstaBlock from "@/components/home-components/InstaBlock";
import Testimonials from "@/components/home-components/Testimonials";
import ProductGrid from "@/components/common/ProductGrid";
export default function ContactUs() {
  return (
    <>
      <div>
        <PageHeader title="Delicious Menu" />
        <div className="bg8 pd-common MenuListBox">
          <div className="container">
            <div className="MenuItemsBox">
              <div className="row">
                <div className="col-md-3">
                  <ProductGrid
                    imageSrc="/m1.jpg"
                    menuTitle="Chicken Biriyani"
                    menuPrice="150"
                  />
                </div>
                <div className="col-md-3">
                  <ProductGrid
                    imageSrc="/m2.jpg"
                    menuTitle="Mutton Kuruma"
                    menuPrice="80"
                  />
                </div>
                <div className="col-md-3">
                  <ProductGrid
                    imageSrc="/m3.jpg"
                    menuTitle="Butter Chicken"
                    menuPrice="70"
                  />
                </div>
                <div className="col-md-3">
                  <ProductGrid
                    imageSrc="/m1.jpg"
                    menuTitle="Chicken Biriyani"
                    menuPrice="150"
                  />
                </div>
                
                <div className="col-md-3">
                  <ProductGrid
                    imageSrc="/m2.jpg"
                    menuTitle="Mutton Kuruma"
                    menuPrice="80"
                  />
                </div>
                <div className="col-md-3">
                  <ProductGrid
                    imageSrc="/m4.jpg"
                    menuTitle="Chana Masala"
                    menuPrice="50"
                  />
                </div>
                <div className="col-md-3">
                  <ProductGrid
                    imageSrc="/m2.jpg"
                    menuTitle="Mutton Kuruma"
                    menuPrice="80"
                  />
                </div>
                <div className="col-md-3">
                  <ProductGrid
                    imageSrc="/m1.jpg"
                    menuTitle="Chicken Biriyani"
                    menuPrice="150"
                  />
                </div>
                <div className="col-md-3">
                  <ProductGrid
                    imageSrc="/m3.jpg"
                    menuTitle="Butter Chicken"
                    menuPrice="70"
                  />
                </div>
                <div className="col-md-3">
                  <ProductGrid
                    imageSrc="/m1.jpg"
                    menuTitle="Chicken Biriyani"
                    menuPrice="150"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
        <InstaBlock />
      </div>
    </>
  );
}
