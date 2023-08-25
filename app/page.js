import Image from "next/image";
import Link from "next/link";
import HeroBGImage from "public/images/hero__background.png";
import AboutUsCompact from "../src/components/AboutUsCompact/AboutUsCompact";
import Services from "../src/components/Services/Services";
import IdeasCome from "../src/components/IdeasCome/IdeasCome";
import WorkList from "../src/components/WorkList/WorkList";
import Footer from "../src/components/Footer/Footer";
import Hero from "../src/components/Hero/Hero";

export default function home() {
 
  return (
    <>
      <Hero />
      <AboutUsCompact />
      <Services />
      <IdeasCome />
      <WorkList />
      <Footer />
    </>
  );
}
