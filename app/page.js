import { getAllProjects } from "../src/lib/api";
import "src/styles/style.scss";
import AboutUsCompact from "../src/components/AboutUsCompact/AboutUsCompact";
import Footer from "../src/components/Footer/Footer";
import Hero from "../src/components/Hero/Hero";
import IdeasCome from "../src/components/IdeasCome/IdeasCome";
import Services from "../src/components/Services/Services";
import WorkList from "../src/components/WorkList/WorkList";
import Link from "next/link";

export default async function home() {
  const projects = await getAllProjects();

  return (
    <>
      <WorkList projects={projects} />
      
      {projects.length > 0 && projects.map(project => {
          const { id, date, title, content } = project
          return (
            <li key={id}>
              <Link href={`/projects/${id}`}>
                {date} - {title}
              </Link>
              
              {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}

            </li>
          )
        })}
      <Hero />
      <AboutUsCompact />
      <Services />
      <IdeasCome />
      <Footer />
    </>
  );
}
