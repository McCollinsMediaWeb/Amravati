import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";
export default function FooterBottom() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <>
      <div className="FooterBottomWrap">
        <div className="container">
          <div className="FooterBottom">
            <div>© 2023 Amaravathi. All Rights Reserved.</div>
            <div>
              <a href="#">Designed & Developed by McCollins</a>
            </div>
          </div>
        </div>
      </div>
      {!isDesktop && (
      <div class="halo-sticky-toolbar-mobile mobile-only">
        <div class="bottom-bar">
          <ul class="bottom-bar--list">
            <li class="">
            <Link href={"/"}>
                <div class="icon">
                  <div class="FtrIconH home">&nbsp;</div>
                </div>
                <div class="text">Home</div>
              </Link>
            </li>
            <li class="">
            <Link href={"/catering"}>
                <div class="icon">
                  <div class="FtrIconH reserve">&nbsp;</div>
                </div>
                <div class="text">Catering</div>
              </Link>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
              >
                <div class="icon">
                  <div class="FtrIconH order">&nbsp;</div>
                </div>
                <div class="text">Order</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="icon">
                  <div class="FtrIconH whatsapp">&nbsp;</div>
                </div>
                <div class="text">WhatsApp</div>
              </a>
            </li>
            <li>
              <a href="tel:+971525995503">
                <div class="icon">
                  <div class="FtrIconH call">&nbsp;</div>
                </div>
                <div class="text">Call Us</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      )}
    </>
  );
}
