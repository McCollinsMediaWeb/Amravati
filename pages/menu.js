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
        
        <div className="bgnew5 pd-common MenuListBox">
          <div className="container">
            <div className="MenuItemTabWrap">
            <div
            className="HmT1 text-center hfont"
            
          >
           Savour the Spice, Taste the Tradition!
          </div>
          <div
            className="HmT2 text-center"
            
          >
            Welcome to Flavor Paradise: Amaravathi's Culinary Heaven Awaits! Here, each dish tells a story of tradition, innovation, and passion for authentic Andhra cuisine. From succulent meats to fresh vegetable delights, our menu offers a symphony of taste designed to delight your senses. Prepare to indulge in the bold spices and delicate flavours of our meticulously crafted dishes. Get ready to embark on a journey through our tantalising meat and vegetable options. Your culinary adventure begins now!
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
