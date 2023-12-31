"use client";

import { Splide } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Intersection } from "@splidejs/splide-extension-intersection";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useProjectContext } from "../../root/project";
import styles from "./WorkList.module.scss";

export default function WorkList({ projects }) {
  const [targetSlide, setTargetSlide] = useState(0);
  const router = useRouter();
  const slideImagesRef = useRef([]);
  const [transitioning, setTransitioning] = useState(false);

  const [project, setProject] = useProjectContext();
  gsap.registerPlugin(Flip);

  useEffect(() => {
    let state;
    if (transitioning !== false) {
      // animate all visible slides on the page
      gsap.to(".splide", {
        y: "32px",
        opacity: 0,
        duration: 0.5,
      });

      // update project info to display in the hero
      setProject({
        title: projects[transitioning].title,
        id: projects[transitioning].id,
        image: projects[transitioning].image,
      });

      Flip.fit("#top-header", slideImagesRef.current[transitioning]);

      state = Flip.getState("#top-header");
      gsap.set("#top-header", { clearProps: true });

      Flip.from(state, {
        duration: 0.4,
        scale: false,
        onComplete: () => {
          router.push("/projects/" + projects[transitioning].id);
          setTransitioning(false);
        },
      });
    }

    return () => {
      gsap.killTweensOf(".splide");
      Flip.killFlipsOf(state);
    };
  }, [transitioning, projects, router, setProject]);

  const openPage = (i) => {
    setTransitioning(i);
  };

  useEffect(() => {
    setTargetSlide(0);

    let fw = "80vw";
    if(window.innerWidth > 800) {
      fw = "30vw";
    }
    if(window.innerWidth > 1000) {
      fw = "30vw";
    }



    const splide = new Splide(".splide", {
      type: "loop",
      fixedWidth: window.innerWidth > 800 ? "30vw" : "80vw",
      arrows: false,
      pagination: false,
      gap: "4rem",
      // // speed: 1000,
      // speed: 0,
      // autoScroll: false,
      perPage: 1,
      // autoScroll: {
      //   speed: 0.2,
      // },
      inView: {
        autoScroll: true,
      },
      outView: {
        autoScroll: false,
      },
      breakpoints: {
        640: {
          autoScroll: false,
          gap: "2rem",
        },
      },
    }).mount({ AutoScroll, Intersection });

    splide.on("active", (e) => {
      setTargetSlide(e.slideIndex < 0 ? e.index : e.slideIndex);
    });

    splide.on("move", (e) => {
      setTargetSlide(e);
    });

    return () => {
      splide.destroy();
    };
  }, [projects]);

  return (
    <section className={styles.wrapper} id="work">
      <div className="container--offset">
        <h1 className={styles.title}>Work</h1>
        <header className={styles.header}>
          <div>
            <p className="article--description">You should be inspired by our greatly written storytelling texts above but lets take you on a journey through our projects.</p>
          </div>
          <div className="d--none--sm">
            <Link href="#contact" className="button">
              <span className="button__label">Start a project</span>
            </Link>
          </div>
        </header>
        
      </div>

      {projects.length > 0 && (
        <section className={`splide ${styles.slider}`}>
          <div className="backdrop--gradient" style={{transform: "translate3d(-100%, -0%, 0) scale(1.2)"}}></div>
          <div className="splide__track">
            <div className="splide__list">
              {projects.map((project, index) => (
                <li
                  className={`${styles.slide} splide__slide`}
                  key={index}
                  onClick={() => {
                    openPage(index);
                  }}
                >
                  <div className={"cursor-trigger"}>
                    <div
                      className={styles.img__wrapper}
                      ref={(element) => {
                        slideImagesRef.current[index] = element;
                      }}
                    >
                      <ExportedImage src={project.image} fill={true} placeholer="empty" alt="" />
                    </div>
                    <section className={styles.body}>
                      <h4 className={styles.body__title}>{project.title}</h4>
                      <p className="text--light text--clamp">{project.excerpt}</p>
                    </section>
                  </div>
                </li>
              ))}
            </div>
          </div>
        </section>
      )}
      {!projects.length > 0 && <p>No projects found</p>}
    </section>
  );
}
