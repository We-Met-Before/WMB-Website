import { getAllPeople, getAllProjects } from "../lib/api";
import "src/styles/style.scss";
import AboutUsCompact from "../components/AboutUsCompact/AboutUsCompact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import IdeasCome from "../components/IdeasCome/IdeasCome";
import Services from "../components/Services/Services";
import WorkList from "../components/WorkList/WorkList";
import Link from "next/link";

export default async function home() {
  return (
    <>
      <Hero />
      <AboutUsCompact people={await getAllPeople()} />
      <Services />
      <IdeasCome />
      <WorkList projects={await getAllProjects()} />
      <Footer />
    </>
  );
}
