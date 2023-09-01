"use client";

import { Splide } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Intersection } from "@splidejs/splide-extension-intersection";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useProjectContext } from "../../root/project";
import styles from "./WorkList.module.scss";

export default function WorkList({ projects }) {
  const [targetSlide, setTargetSlide] = React.useState(0);
  const router = useRouter();

  // const heroImage = useRef(null);
  const slideImagesRef = useRef([]);
  const [transitioning, setTransitioning] = React.useState(false);
  const transitionTargetRef = useRef(null);


  const [project, setProject] = useProjectContext();

  useEffect(() => {
    gsap.registerPlugin(Flip);
    // set initial position
    // gsap.set(heroImage.current, { y: "-10%" });
  });

  useEffect(() => {
    
    if (transitioning !== false) {
      console.log("transition page");

      // animate all visible slides on the page
      gsap.to('.splide', {
        y: '32px',
        opacity: 0,
        duration: .5
        
        // ease: 'Power3.easeOut'
      })
      


      // update project info to display in the hero
      setProject({
        title: projects[transitioning].title,
        id: projects[transitioning].id,
        image: projects[transitioning].image
      });

      Flip.fit(
        "#top-header",
        slideImagesRef.current[transitioning]
      );

      const state = Flip.getState("#top-header");
      gsap.set("#top-header", { clearProps: true });
      
      Flip.from(state, {
        duration: 4,
        // ease: "Power3.easeOut",
        scale: false,
        onComplete: () => {
          router.push("/projects/" + projects[transitioning].id);
          // console.log("should navigate now");
          setTransitioning(false);
        },
      });
    }
    
  }, [transitioning, projects, router]);

  const openPage = (index) => {
    console.log("open page");
    setTransitioning(index);
  };

  useEffect(() => {
    setTargetSlide(0);

    const splide = new Splide(".splide", {
      type: "loop",
      fixedWidth: "400px",
      arrows: false,
      focus: "center",
      pagination: false,
      perMove: 1,
      gap: "4rem",
      speed: 1009,
      autoScroll: false,
      // autoScroll: {
      //   speed: 0.2,
      // },
      // inView: {
      //   autoScroll: true,
      // },
      // outView: {
      //   autoScroll: false,
      // },
    }).mount({ AutoScroll, Intersection });

    splide.on("active", (e) => {
      setTargetSlide(e.slideIndex < 0 ? e.index : e.slideIndex);
    });

    splide.on("move", (e) => {
      setTargetSlide(e);
    });
  }, [projects]);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Work</h1>
      <div className="container">
        <header className={styles.header}>
          <div>
            <p className="text--max-width text--light">
              You should be inspired by our greatly written storytelling texts
              above but lets take you on a journey through our projects.
            </p>
          </div>
          <Link href="#contact" className="button">
            Start a project
          </Link>
        </header>
      </div>
      <div>
        {projects.length > 0 && (
          <section className={`splide ${styles.slider}`}>
            <div className="splide__track">
              <div className="splide__list">
                {projects.map((project, index) => (
                  <li
                    className={`${styles.slide} splide__slide ${
                      targetSlide == index ? styles["slide--active"] : ""
                    }`}
                    key={index}
                    href={`/projects/${project.id}`}
                    onClick={() => {
                      openPage(index);
                    }}
                  >
                    <div className={styles.card}>
                      <div
                        className={styles.img__wrapper}
                        ref={(element) => {
                          slideImagesRef.current[index] = element;
                        }}
                      >
                        <Image
                          src={project.image}
                          width={200}
                          height={400}
                          alt=""
                        />
                      </div>
                      <section className={styles.body}>
                        <h4 className={styles.body__title}>{project.title}</h4>

                        <p className="text--light text--clamp">
                          {project.excerpt}
                        </p>
                      </section>
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </section>
        )}
        {!projects.length > 0 && <p>No projects found</p>}
                        <h2>{projects[transitioning]?.image}</h2>
       
      </div>
    </section>
  );
}
