import { getAllPeople, getAllProjects } from "../src/lib/api";
import "src/styles/style.scss";
import AboutUsCompact from "../src/components/AboutUsCompact/AboutUsCompact";
import Footer from "../src/components/Footer/Footer";
import Hero from "../src/components/Hero/Hero";
import IdeasCome from "../src/components/IdeasCome/IdeasCome";
import Services from "../src/components/Services/Services";
import WorkList from "../src/components/WorkList/WorkList";
import Link from "next/link";

export default async function home() {
  return (
    <>
      <Hero />
      <AboutUsCompact people={await getAllPeople()} />
      <Services />
      <WorkList projects={await getAllProjects()} />
      <IdeasCome />
      <Footer />
    </>
  );
}
