"use client";

import { Splide } from "@splidejs/splide";
import Link from "next/link";
import React, { useEffect } from "react";
import styles from "./WorkList.module.scss";
import Image from "next/image";

export default function WorkList({ projects }) {
  const [collaps, setCollaps] = React.useState(0);
  useEffect(() => {
    console.log(projects);
  }, [])
  useEffect(() => {
    new Splide(".splide", {
      classes: {

      },
      type: "loop",
      fixedWidth: "400px",
      focus  : 'center',
      perMove: 1,
      gap: '4rem'
    }).mount();
  }, []);
  return (
    <section className={styles.wrapper}>
      <div className="container flex--between">
        <header>
          <h1>Work</h1>
          <p>
            You should be inspired by our greatly writtin storytelling texts
            above but lets take you on a journey through our projects.
          </p>
        </header>

        <Link href="#contact" className="button">
          Start a project
        </Link>
      </div>
      <div>
        {projects.length > 0 && (
          <section className="splide">
            <div className="splide__track">
              <ul className="splide__list">
                {projects.map((project, index) => (
                  <li className={`${styles.slide} splide__slide`} key={index}>
                    <div className={styles.card}>
                      <div className={styles.img__wrapper}>
                        
                        <Image src={project.image} width={200} height={400}/>
                      </div>
                      <section className={styles.body}>
                        <h3 className={styles.body__title}>{project.title}</h3>
                      
                        <p className="text--light text--clamp">{project.excerpt}</p>
                      </section>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
        {!projects.length > 0 && <p>No projects found</p>}
      </div>
    </section>
  );
}
