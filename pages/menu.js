import PageHeader from "@/components/common/PageHeader";
import InstaBlock from "@/components/home-components/InstaBlock";
import Testimonials from "@/components/home-components/Testimonials";
import ProductGrid from "@/components/common/ProductGrid";
import Slider from "react-slick";
export default function ContactUs() {
  var settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          arrows: false,
          variableWidth: true,
        },
      },
    ],
  };
  return (
    <>
      <div>
        
        <div className="bg5n pd-common MenuListBox">
          <div className="container">
            <div className="MenuItemTabWrap">
            <div
            className="HmT1 text-center hfont"
            
          >
            Discover the Delights of <br />
            Fine Real Traditional Dining
          </div>
          <div
            className="HmT2 text-center"
            
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </div>
              <div className="MenuSlidet1">
                <Slider {...settings}>
                  <div>
                    <div className="MenuTabItem active">All Menus</div>
                  </div>
                  <div>
                    <div className="MenuTabItem">Hot Drink</div>
                  </div>
                  <div>
                    <div className="MenuTabItem">Cool Drinks</div>
                  </div>
                  <div>
                    <div className="MenuTabItem">Shawarma</div>
                  </div>
                  <div>
                    <div className="MenuTabItem">Pizza</div>
                  </div>
                  <div>
                    <div className="MenuTabItem">Side Dishes</div>
                  </div>
                  <div>
                    <div className="MenuTabItem">Daily Dishes</div>
                  </div>
                  <div>
                    <div className="MenuTabItem">Shawarma</div>
                  </div>
                  <div>
                    <div className="MenuTabItem">Pizza</div>
                  </div>
                  <div>
                    <div className="MenuTabItem">Side Dishes</div>
                  </div>
                </Slider>
              </div>
            </div>
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
