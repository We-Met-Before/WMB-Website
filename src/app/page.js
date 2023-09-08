import "src/styles/style.scss";
import AboutUsCompact from "../components/AboutUsCompact/AboutUsCompact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import IdeasCome from "../components/IdeasCome/IdeasCome";
import Services from "../components/Services/Services";
import WorkList from "../components/WorkList/WorkList";
import { getAllPeople, getAllProjects, getAllServices, getServices } from "../lib/api";
import Cursor from "../components/Cursor/Cursor";

export default async function home() {

  return (
    <>
      <Hero />
      <Cursor/>
      <AboutUsCompact people={await getAllPeople()} />
      <Services items={await getAllServices() }/>
      <IdeasCome />
      <WorkList projects={await getAllProjects()} />
      <Footer />
    </>
  );
}
