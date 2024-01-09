import Image from "next/image";
import Link from "next/link";

export default function PageHeader(props) {

  return (
    <>
      <section>
        <div className="PageHeaderWrap">
            <Image
                src="/u1.jpg"
                layout="responsive"
                width={"1440"}
                height={"395"}
                priority={true}
                className="MainBanner"
            />
            <div className="PageHeaderContent">
                <div>
                    <div className="PageTitle position-relative" >{props.title}</div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
