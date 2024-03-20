import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";
export default function FooterBottom() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <>
      <div className="FooterBottomWrap">
        <div className="container">
          <div className="FooterBottom">
            <div>© <span className="sfont">2024</span> Amaravathi. All Rights Reserved.</div>
            <div>
              <a href="https://www.mccollinsmedia.com/" target="_blank">Designed & Developed by McCollins Media</a>
            </div>
          </div>
        </div>
      </div>
      {!isDesktop && (
      <div className="halo-sticky-toolbar-mobile mobile-only">
        <div className="bottom-bar">
          <ul className="bottom-bar--list">
            <li className="">
            <Link href={"/"}>
                <div className="icon">
                  <div className="FtrIconH home">&nbsp;</div>
                </div>
                <div className="text">Home</div>
              </Link>
            </li>
            <li className="">
            <Link href={"/menu"}>
              <div className="icon">
                  <div className="FtrIconH call">&nbsp;</div>
                </div>
                <div className="text">Menu</div>
              </Link>
            </li>
            <li className="">
            <Link href={"/catering"}>
                <div className="icon">
                  <div className="FtrIconH reserve">&nbsp;</div>
                </div>
                <div className="text">Catering</div>
              </Link>
            </li>
            
            <li>
              <a
                href="#"
                target="_blank"
              >
                <div className="icon">
                  <div className="FtrIconH order">&nbsp;</div>
                </div>
                <div className="text">Order</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="icon">
                  <div className="FtrIconH whatsapp">&nbsp;</div>
                </div>
                <div className="text">WhatsApp</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      )}
    </>
  );
}
