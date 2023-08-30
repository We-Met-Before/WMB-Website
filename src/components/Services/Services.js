"use client";

import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "./Services.module.scss";
import astroid_2 from "/public/images/shape_0001_SHAPE-2.png";
import astroid_3 from "/public/images/shape_0002_SHAPE-3.png";

const content = {
  services: [
    {
      title: "Brand Identity",
      body: `We believe in creating value behind your identity, a story that inspires the right people, something that stands out. A story that is not that similar to others. Find us exploring your golden circle and let us translate your image to an inclusive brandguide.`,
      tags: ["Storytelling", "Identity", "Inclusivity"],
      visual: astroid_2,
    },
    {
      title: "Design",
      body: `Our design isn't just about looks – it's about creating an immersive experience. Our team shapes visuals that tell compelling stories, leaving a lasting impact that's hard to forget.`,
      tags: ["Visuals", "Creativity", "Impact"],
      visual: astroid_2,
    },
    {
      title: "Development",
      body: `In today's digital realm, your online presence is paramount. Our developers blend innovation with seamless functionality, fashioning digital experiences that captivate, engage, and connect effortlessly.`,
      tags: ["Innovation", "CSS", "JS"],
      visual: astroid_2,
    },
    {
      title: "Creative Sidekicks",
      body: `From crafting unique brand identities to sculpting immersive designs, building seamless digital experiences, and sparking collective creativity, we're your dedicated partner. Get in touch, and let's shape the exceptional together.`,
      tags: ["Figma", "Workshops", "Team Creativity"],
      visual: astroid_2,
    },
  ],
};

export default function Services() {
  const [active, setActive] = React.useState(0);
  const astroidRef = useRef();
  const astroidRefs = useRef([]);
  const tagRefs = useRef([]);

  const astroids = [astroid_2, astroid_3, astroid_2];
  const tags = [
    ["HTML", "CSS", "JS"],
    ["Design Thinking", "Sprints", "Figma"],
    ["Brand Guide", "Interviews", "Discovery"],
  ];

  useEffect(() => {
    const duration = 80;
    console.log(content.scrollHeight);

    gsap.to(astroidRef.current, {
      rotation: -360,
      ease: "linear",
      repeat: -1,
      duration: duration,
    });
    gsap.from(astroidRefs.current, {
      rotation: -360,
      ease: "linear",
      repeat: -1,
      duration: duration,
      stagger: false,
    });
    gsap.from(tagRefs.current, {
      rotation: -360,
      ease: "linear",
      repeat: -1,
      duration: duration,
      stagger: false,
    });
  }, [astroidRef, astroidRefs]);

  return (
    <section className="container">
      <h1 className={styles.title}>Services</h1>
      <div className="flex--container">
        <div className="col">
          <ul className={styles.list}>
            {content.services.map((item, index) => (
              <li
                className={`${styles.collapsable} ${
                  active == index ? styles["collapsable--active"] : ""
                }`}
                key={index}
                onClick={() => setActive(index)}
              >
                <h4>{item.title}</h4>
                <p className={styles.collapsable__content}>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.visual} col d--none--sm`}>
          <ul className={styles["list__visuals"]} ref={astroidRef}>
            {content.services.map((item, index) => (
              <li
                key={index}
                className={`${styles.listitem} ${
                  active == index && styles["listitem--active"]
                } ${active == index - 1 && styles["listitem--next"]}`}
              >
                <div
                  className={styles.astroid}
                  ref={(element) => {
                    astroidRefs.current[index] = element;
                  }}
                >
                  <Image src={item.visual} />
                </div>
              </li>
            ))}
            {content.services.map((item, i) => (
              <span className={styles.tag__group} key={i}>
                {item.tags.map((tag, j) => (
                  <li
                    className={`${styles.listitem} ${
                      styles["listitem--tag"]
                    }  ${active == i && styles["listitem--active-tag"]}`}
                  >
                    <div
                      className={`${styles.tag}`}
                      key={j}
                      ref={(element) => {
                        tagRefs.current[j] = element;
                      }}
                    >
                      {tag}
                    </div>
                  </li>
                ))}
              </span>
            ))}
          </ul>

          <ul className={styles["list__tags"]}></ul>
        </div>
      </div>
    </section>
  );
}
