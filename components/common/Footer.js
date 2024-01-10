import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="FooterLogoWrap">
                <Link href={"/"}>
                  <Image
                    src="/footerlogo.png"
                    layout="responsive"
                    height={"135"}
                    width={"264"}
                    priority={true}
                    className=""
                  />
                </Link>
              </div>
              <div className="FT1">
                Shop 1 & 2, Khalid Attar Building, Beside Haji Ameer Trading,
                Sheikh Khalifa Bin Zayed Road, Al Karama, Dubai
              </div>
              <a href="#" className="FT2">
                Get Direction
              </a>
            </div>
            <div className="col-md-5">
              <div className="FT3">Useful Links</div>
              <div className="row FtrLinksWrap">
                <div className="col-md-6">
                  <Link href={"/"}>Home</Link>
                </div>
                <div className="col-md-6">
                  <Link href={"/aboutus"}>Aboutus</Link>
                </div>
                <div className="col-md-6">
                  <Link href={"/catering"}>Catering</Link>
                </div>
                <div className="col-md-6">
                  <Link href={"/offers"}>Offers</Link>
                </div>
                <div className="col-md-6">
                  <Link href={"/contactus"}>Contact us</Link>
                </div>
                <div className="col-md-6">
                  <Link href={"/"}>Order Now</Link>
                </div>
                <div className="col-md-6">
                  <Link href={"/reviews"}>Customer Reviews</Link>
                </div>
                <div className="col-md-6">
                  <Link href={"/gallery"}>Gallery</Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="FT3">Connect With Us</div>
              <div className="FT4">Phone Number</div>
              <div className="FtLnk1 hfont">
                <a href="#">+971 43377077</a>
              </div>
              <div className="FtLnk1 hfont">
                <a href="#">+971 5515 46699</a>
              </div>
              <div className="FtrSocialMedia">
                <div className="FtrSocialMediaFlex">
                  <a href="#" target="_blank">
                    <span className="FtrSocialIcon instagram">&nbsp;</span>
                  </a>
                  <a href="#" target="_blank">
                    <span className="FtrSocialIcon facebook">&nbsp;</span>
                  </a>
                  <a href="#" target="_blank">
                    <span className="FtrSocialIcon linkedin">&nbsp;</span>
                  </a>
                  <a href="#" target="_blank">
                    <span className="FtrSocialIcon twitter">&nbsp;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
