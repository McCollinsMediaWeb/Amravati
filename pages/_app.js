import Head from "next/head";
import "@/styles/reboot.css"
import "@/styles/globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FooterBottom from "@/components/common/FooterBottom";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Amravati</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
      <FooterBottom/>
    </>
  );
}
