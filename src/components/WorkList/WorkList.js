"use client";

import { Splide } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import styles from "./WorkList.module.scss";
import { Intersection } from "@splidejs/splide-extension-intersection";
import { Flip } from "gsap/Flip";
import { gsap } from "gsap";
import HeroProject from "../HeroProject/HeroProject";
import { useRouter } from "next/navigation";

export default function WorkList({ projects }) {
  const [targetSlide, setTargetSlide] = React.useState(0);
  const router = useRouter();

  const heroImage = useRef(null);
  const slideImagesRef = useRef([]);
  const [transitioning, setTransitioning] = React.useState(false);
  const transitionTargetRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    // set initial position
    gsap.set(heroImage.current, { y: "-10%" });
  });

  useEffect(() => {
    console.log("tralk about " + transitioning);

    if (transitioning !== false) {
      console.log("transition page");
      gsap.set(transitionTargetRef.current, { yPercent: -80 });

      Flip.fit(
        transitionTargetRef.current,
        slideImagesRef.current[transitioning]
      );
      const state = Flip.getState(transitionTargetRef.current);
      gsap.set(transitionTargetRef.current, { clearProps: true });
      Flip.from(state, {
        duration: .4,
        ease: "cubic-bezier(0.2, 0, 0, 1)",
        scale: false,
        onComplete: () => {
          router.push("/projects/" + projects[transitioning].id);
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

        <HeroProject
          image={transitioning !== false ? projects[transitioning].image : ""}
          transitioning={true}
          innerRef={transitionTargetRef}
        />
      </div>
    </section>
  );
}
