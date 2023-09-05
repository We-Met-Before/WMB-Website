"use client";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { useExtLoaderContext } from "../../root/loader";
import Video from "../videoComplete/Video";
import styles from "./Services.module.scss";
import classNames from "classnames";

const cn = classNames.bind(styles);

const content = {
  services: [
    {
      title: "Brand Identity",
      body: `We believe in creating value behind your identity, a story that inspires the right people, something that stands out. A story that is not that similar to others. Find us exploring your golden circle and let us translate your image to an inclusive brandguide.`,
      tags: ["Storytelling", "Identity", "Inclusivity"],
      visual: "/videos/ROCK_1_VP9",
    },
    {
      title: "Design",
      body: `Our design isn't just about looks – it's about creating an immersive experience. Our team shapes visuals that tell compelling stories, leaving a lasting impact that's hard to forget.`,
      tags: ["Visuals", "Creativity", "Impact"],
      visual: "/videos/ROCK_2_VP9",
    },
    {
      title: "Development",
      body: `In today's digital realm, your online presence is paramount. Our developers blend innovation with seamless functionality, fashioning digital experiences that captivate, engage, and connect effortlessly.`,
      tags: ["Innovation", "CSS", "JS"],
      visual: "/videos/ROCK_3_VP9",
    },
    {
      title: "Creative Sidekicks",
      body: `From crafting unique brand identities to sculpting immersive designs, building seamless digital experiences, and sparking collective creativity, we're your dedicated partner. Get in touch, and let's shape the exceptional together.`,
      tags: ["Figma", "Workshops", "Team Creativity"],
    },
  ],
};

export default function Services() {
  const [active, setActive] = useState(0);
  const [hasScrollTrigger] = useExtLoaderContext();
  const astroidRef = useRef();
  const astroidRefs = useRef([]);
  const videoRefs = useRef([]);
  const tagRefs = useRef([]);
  const wrapperRef = useRef();
  const testRef = useRef();

  useEffect(() => {
    if (hasScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      videoRefs.current.forEach((video) => {
        gsap.to(video, {
          scrollTrigger: {
            trigger: video,
            start: "top center+=25%",
            onEnter: () => video.play(),
          },
        });
      });
    }

    return () => {
      videoRefs.current.forEach((video) => {
        gsap.killTweensOf(video);
      });
    };
  }, [hasScrollTrigger, videoRefs]);

  useEffect(() => {
    const duration = 80;

    gsap.to(astroidRef.current, {
      rotation: -180,
      ease: "linear",
      repeat: -1,
      duration: duration,
      yoyo: true,
    });
    gsap.from(astroidRefs.current, {
      rotation: -180,
      ease: "linear",
      repeat: -1,
      duration: duration,
      stagger: false,
      yoyo: true,
    });
    gsap.from(tagRefs.current, {
      rotation: -180,
      ease: "linear",
      repeat: -1,
      duration: duration,
      stagger: false,
      yoyo: true,
    });

    return () => {
      gsap.killTweensOf(astroidRef.current);
      gsap.killTweensOf(astroidRefs.current);
      gsap.killTweensOf(tagRefs.current);
    };
  }, [astroidRef, astroidRefs]);

  return (
    <section className="section" ref={wrapperRef} id="services">
      <div className="container--offset">
        <h1 className={styles.title} ref={testRef}>
          Services
        </h1>
      </div>

      <div className="container">
        <div className="flex--container">
          <div className="col">
            <ul className={styles.list}>
              {content.services.map((item, index) => (
                <li className={`${styles.collapsable} ${active == index && styles["collapsable--active"]}`} key={index} onClick={() => setActive(index)}>
                  <h4>{item.title}</h4>
                  <p className={styles.collapsable__content}>{item.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.visual} col d--none--sm`}>
            <ul className={styles["list__visuals"]} ref={astroidRef}>
              {content.services.map((item, i) => (
                <li key={i} className={styles.listitem}>
                  {item.visual && (
                    <div
                      className={styles.astroid}
                      ref={(element) => {
                        astroidRefs.current[i] = element;
                      }}
                    >
                      <Video
                        src={item.visual}
                        loop={false}
                        autoPlay={false}
                        ref={(element) => {
                          videoRefs.current[i] = element;
                        }}
                      />
                    </div>
                  )}
                </li>
              ))}

              {content.services.map((item, i) => (
                <span className={styles.tag__group} key={i}>
                  {item.tags.map((tag, j) => (
                    <li className={`${styles.listitem} ${styles["listitem--tag"]}  ${active == i && styles["listitem--active-tag"]}`} key={j}>
                      <div
                        className="badge"
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
          </div>
        </div>
      </div>
    </section>
  );
}
