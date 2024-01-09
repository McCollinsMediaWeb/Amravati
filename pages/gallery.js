
import HomeGallery from "@/components/home-components/HomeGallery";
import InstaBlock from "@/components/home-components/InstaBlock";
import PageHeader from "@/components/common/PageHeader";
export default function Home() {
  return (
    <>
      
      <div>
      <PageHeader title="Gallery"/>
        <HomeGallery/>
        <InstaBlock/>
        </div>
    </>
  );
}
